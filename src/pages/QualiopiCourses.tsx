import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, BookOpen, ChevronRight, Target, Award, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import jsPDF from 'jspdf';

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
      >
        <div className="flex items-center">
          {icon}
          <h3 className="text-xl font-semibold text-gray-800 ml-2">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
};

interface CourseDetailProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    duration: string;
    level: string;
    objectives: string[];
    program: {
      day: string;
      morning: string[];
      afternoon: string[];
    }[];
    prerequisites: string[];
    evaluation: string[];
    project?: {
      title: string;
      description: string;
      components: {
        name: string;
        description: string;
      }[];
    };
  };
}

const CourseDetail: React.FC<CourseDetailProps> = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      let yPos = 20;
      const pageWidth = doc.internal.pageSize.width;
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);

      // Helper function for text wrapping
      const addWrappedText = (text: string, x: number, y: number, maxWidth: number) => {
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return (lines.length * doc.getTextDimensions('Test').h) + 5;
      };

      // Helper function to add a section title
      const addSectionTitle = (title: string) => {
        doc.setFontSize(16);
        doc.setTextColor(41, 98, 255); // Blue color
        doc.text(title, margin, yPos);
        yPos += 10;
        doc.setTextColor(0, 0, 0); // Reset to black
        doc.setFontSize(12);
      };

      // Header with logo and title
      doc.setFillColor(41, 98, 255);
      doc.rect(0, 0, pageWidth, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.text('ThinkAI Academy', margin, 25);
      doc.setFontSize(14);
      doc.text('Programme de Formation', margin, 35);
      
      yPos = 60;

      // Course title and basic info
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(20);
      yPos += addWrappedText(course.title, margin, yPos, contentWidth);
      
      // Duration and level
      doc.setFontSize(12);
      yPos += 10;
      doc.text(`Durée: ${course.duration}`, margin, yPos);
      yPos += 7;
      doc.text(`Niveau: ${course.level}`, margin, yPos);
      yPos += 15;

      // Objectives section
      addSectionTitle('Objectifs Pédagogiques');
      course.objectives.forEach(objective => {
        yPos += addWrappedText(`• ${objective}`, margin, yPos, contentWidth - 10);
      });
      yPos += 10;

      // Prerequisites section
      addSectionTitle('Public Cible et Prérequis');
      course.prerequisites.forEach(prerequisite => {
        yPos += addWrappedText(`• ${prerequisite}`, margin, yPos, contentWidth - 10);
      });
      yPos += 10;

      // Check if we need a new page
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      // Program section
      addSectionTitle('Programme Détaillé');
      course.program.forEach(day => {
        // Check if we need a new page
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }

        doc.setFontSize(14);
        doc.setTextColor(41, 98, 255);
        yPos += addWrappedText(day.day, margin, yPos, contentWidth);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        
        // Morning
        yPos += 7;
        doc.text('Matin:', margin, yPos);
        yPos += 5;
        day.morning.forEach(item => {
          yPos += addWrappedText(`• ${item}`, margin + 5, yPos, contentWidth - 15);
        });

        // Afternoon
        yPos += 7;
        doc.text('Après-midi:', margin, yPos);
        yPos += 5;
        day.afternoon.forEach(item => {
          yPos += addWrappedText(`• ${item}`, margin + 5, yPos, contentWidth - 15);
        });
        yPos += 10;
      });

      // Check if we need a new page
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      // Evaluation section
      addSectionTitle('Modalités d\'Évaluation');
      course.evaluation.forEach(item => {
        yPos += addWrappedText(`• ${item}`, margin, yPos, contentWidth - 10);
      });

      // Project section if available
      if (course.project) {
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }

        addSectionTitle('Projet Final');
        yPos += addWrappedText(course.project.title, margin, yPos, contentWidth);
        yPos += 5;
        yPos += addWrappedText(course.project.description, margin, yPos, contentWidth);
        yPos += 10;

        course.project.components.forEach(component => {
          doc.setFontSize(12);
          doc.setTextColor(41, 98, 255);
          yPos += addWrappedText(component.name, margin, yPos, contentWidth);
          doc.setTextColor(0, 0, 0);
          yPos += addWrappedText(component.description, margin + 5, yPos, contentWidth - 15);
          yPos += 5;
        });
      }

      // Footer on each page
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(128, 128, 128);
        doc.text(
          `ThinkAI Academy - Page ${i} sur ${pageCount}`,
          pageWidth / 2,
          285,
          { align: 'center' }
        );
      }

      // Save the PDF
      doc.save(`${course.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{course.title}</h2>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white/20"
              onClick={handleDownloadPDF}
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger PDF
            </Button>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Target className="w-5 h-5 mr-2" />
              <span>{course.level}</span>
            </div>
          </div>

          <ExpandableSection 
            title="Objectifs Pédagogiques" 
            icon={<Target className="w-6 h-6 text-blue-600" />}
          >
            <ul className="space-y-2">
              {course.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          <ExpandableSection 
            title="Public Cible" 
            icon={<Users className="w-6 h-6 text-blue-600" />}
          >
            <ul className="space-y-2">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{prerequisite}</span>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          <ExpandableSection 
            title="Programme" 
            icon={<BookOpen className="w-6 h-6 text-blue-600" />}
          >
            <div className="space-y-6">
              {course.program.map((day, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">{day.day}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Matin</h5>
                      <ul className="space-y-2">
                        {day.morning.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Après-midi</h5>
                      <ul className="space-y-2">
                        {day.afternoon.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableSection>

          <ExpandableSection 
            title="Évaluation" 
            icon={<Award className="w-6 h-6 text-blue-600" />}
          >
            <ul className="space-y-2">
              {course.evaluation.map((evaluationItem, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{evaluationItem}</span>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          {course.project && (
            <ExpandableSection
              title="Projet Final"
              icon={<Target className="w-6 h-6 text-blue-600" />}
            >
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-900">{course.project.title}</h4>
                <p className="text-gray-700">{course.project.description}</p>
                <div className="space-y-4 mt-4">
                  {course.project.components.map((component, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-600 mb-2">{component.name}</h5>
                      <p className="text-gray-700">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>
          )}

          <div className="flex justify-end mt-6">
            <Link to="/contact">
              <Button variant="primary">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const QualiopiCourses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      title: "Parcours 'Découverte Light' (1 jour)",
      duration: "1 jour (7 heures)",
      level: "Débutant",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
      shortDescription: "Une journée intensive pour découvrir les fondamentaux de l'IA et ses applications pratiques immédiates.",
      objectives: [
        "Comprendre les concepts fondamentaux de l'IA générative",
        "Maîtriser les outils IA accessibles aux non-techniciens",
        "Découvrir les cas d'usage concrets dans différents secteurs",
        "Apprendre à utiliser l'IA dans son quotidien professionnel"
      ],
      program: [
        {
          day: "Matinée : Fondamentaux de l'IA (3h30)",
          morning: [
            "Introduction aux concepts clés de l'IA générative",
            "Panorama des technologies accessibles aux non-techniciens",
            "Cas d'usage concrets dans différents secteurs d'activité",
            "Enjeux éthiques et limites à connaître"
          ],
          afternoon: [
            "Premiers pas avec ChatGPT Lite",
            "Création d'images simples avec DALL-E Mini",
            "Initiation à Gamma pour les présentations",
            "Exercices guidés sur chaque outil"
          ]
        },
        {
          day: "Après-midi : Mise en Pratique Guidée (3h30)",
          morning: [
            "Rédaction assistée de courriels professionnels",
            "Création de résumés automatiques de documents",
            "Analyse de données simples avec l'IA",
            "Création de templates réutilisables"
          ],
          afternoon: [
            "Conception d'une présentation professionnelle avec Gamma",
            "Génération d'illustrations personnalisées",
            "Création d'un mini-projet adapté au secteur d'activité",
            "Évaluation et feedback sur les réalisations"
          ]
        }
      ],
      prerequisites: [
        "Aucun prérequis technique spécifique",
        "Maîtrise basique de l'outil informatique",
        "Curiosité pour l'IA et ses applications",
        "Volonté d'apprendre et d'expérimenter"
      ],
      targetAudience: [
        "Professionnels souhaitant découvrir l'IA",
        "Managers et décideurs",
        "Entrepreneurs et porteurs de projets",
        "Toute personne intéressée par l'IA et son impact"
      ],
      evaluation: [
        "Mini-projet final avec grille d'auto-évaluation",
        "Évaluation continue pendant les ateliers pratiques",
        "Présentation des réalisations en fin de journée",
        "Accès 30 jours aux ressources + session Q&R à J+15"
      ],
      project: {
        title: "Assistant Personnel de Productivité",
        description: "À la fin de la journée, chaque participant aura créé son propre 'Assistant Personnel de Productivité' adapté à son métier, comprenant :",
        components: [
          {
            name: "Templates personnalisés",
            description: "Ensemble de prompts optimisés pour les tâches récurrentes spécifiques au poste de l'apprenant (rédaction d'emails, création de rapports, analyse de données, etc.)"
          },
          {
            name: "Présentation visuelle",
            description: "Support de présentation créé avec Gamma, incluant des visuels générés par IA, pour partager les apprentissages avec son équipe"
          },
          {
            name: "Plan d'action",
            description: "Feuille de route personnalisée pour intégrer progressivement l'IA dans son quotidien professionnel, avec objectifs à 7, 30 et 90 jours"
          }
        ]
      }
    },
    {
      title: "Fondamentaux de l'IA et Outils Pratiques",
      duration: "3 jours (21 heures)",
      level: "Débutant",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
      shortDescription: "Une formation complète pour maîtriser les bases de l'IA et ses applications pratiques en entreprise.",
      objectives: [
        "Comprendre les concepts fondamentaux de l'IA",
        "Maîtriser les outils IA grand public",
        "Développer des compétences en prompt engineering",
        "Automatiser des tâches quotidiennes avec l'IA"
      ],
      program: [
        {
          day: "Jour 1: Introduction à l'IA et Premiers Pas",
          morning: [
            "Présentation des concepts fondamentaux de l'IA",
            "Panorama des technologies d'IA générative",
            "Comprendre les modèles de langage (LLM)",
            "Atelier pratique: Première prise en main de ChatGPT"
          ],
          afternoon: [
            "Introduction au prompt engineering",
            "Techniques de base pour formuler des requêtes efficaces",
            "Cas d'usage professionnels simples",
            "Exercices pratiques: Rédaction assistée et génération de contenu"
          ]
        },
        {
          day: "Jour 2: Prompt Engineering et Applications Métier",
          morning: [
            "Techniques avancées de prompt engineering",
            "Création de templates pour tâches récurrentes",
            "Génération d'images avec DALL·E 3",
            "Atelier: Création de visuels pour présentations"
          ],
          afternoon: [
            "Applications sectorielles (marketing, RH, finance...)",
            "Création de présentations avec Gamma",
            "Amélioration de textes avec DeepL Write",
            "Exercices pratiques: Automatisation de tâches quotidiennes"
          ]
        },
        {
          day: "Jour 3: Intégration de l'IA et Projet Final",
          morning: [
            "Intégration des outils IA dans le workflow quotidien",
            "Bonnes pratiques et limites éthiques",
            "Sécurité et confidentialité des données",
            "Atelier: Création d'un assistant IA personnalisé"
          ],
          afternoon: [
            "Projet final: Mise en place d'un cas d'usage complet",
            "Présentation des projets et feedback",
            "Évaluation des acquis",
            "Plan d'action personnel et ressources complémentaires"
          ]
        }
      ],
      prerequisites: [
        "Aucun prérequis technique spécifique",
        "Maîtrise basique de l'outil informatique",
        "Curiosité pour l'IA et ses applications"
      ],
      targetAudience: [
        "Professionnels souhaitant s'initier à l'IA",
        "Managers et décideurs",
        "Chefs de projets",
        "Toute personne souhaitant comprendre et utiliser l'IA"
      ],
      evaluation: [
        "Évaluation continue pendant la formation",
        "Projet pratique final",
        "QCM de validation des acquis",
        "Présentation du cas d'usage développé"
      ],
      project: {
        title: "Fondamentaux des Outils IA Grand Public",
        description: "Maîtrisez les outils IA accessibles sans compétences techniques pour une intégration immédiate dans votre quotidien professionnel.",
        components: [
          {
            name: "ChatGPT (OpenAI)",
            description: "Assistant IA conversationnel pour la rédaction, la recherche et l'automatisation de tâches textuelles"
          },
          {
            name: "DALL·E 3",
            description: "Générateur d'images IA capable de créer des visuels détaillés à partir de descriptions textuelles"
          },
          {
            name: "Gamma",
            description: "Plateforme de création de présentations et documents assistée par IA"
          },
          {
            name: "DeepL Write",
            description: "Outil d'amélioration et de réécriture de textes avec suggestions stylistiques et grammaticales"
          }
        ]
      }
    },
    {
      title: "Solutions IA Personnalisées",
      duration: "4 jours (28 heures)",
      level: "Intermédiaire",
      image: "https://images.pexels.com/photos/8566535/pexels-photo-8566535.jpeg",
      shortDescription: "Apprenez à créer des solutions IA sur mesure et à les intégrer dans votre environnement professionnel.",
      objectives: [
        "Concevoir des solutions IA personnalisées",
        "Maîtriser les outils d'automatisation avancés",
        "Intégrer l'IA dans les processus métier",
        "Développer des workflows IA efficaces"
      ],
      program: [
        {
          day: "Jour 1: Concepts Avancés et Personnalisation",
          morning: [
            "Approfondissement des modèles de langage avancés",
            "Comparaison des différents modèles (GPT-4, Mistral, Claude)",
            "Techniques avancées de prompt engineering",
            "Atelier: Création de prompts complexes multi-étapes"
          ],
          afternoon: [
            "Personnalisation des modèles pour besoins spécifiques",
            "Fine-tuning et adaptation au contexte métier",
            "Création d'assistants IA spécialisés",
            "Exercices pratiques: Configuration d'assistants personnalisés"
          ]
        },
        {
          day: "Jour 2: Automatisation et Intégration",
          morning: [
            "Introduction à LangChain pour l'orchestration d'IA",
            "Création de chaînes de traitement automatisées",
            "Intégration avec des sources de données externes",
            "Atelier: Construction d'un workflow automatisé"
          ],
          afternoon: [
            "Intégration avec les outils métier existants",
            "Connexion aux API d'IA (OpenAI, Mistral, etc.)",
            "Bases de données vectorielles avec Pinecone",
            "Exercices pratiques: Création d'une application simple"
          ]
        },
        {
          day: "Jour 3: Applications Sectorielles et No-Code",
          morning: [
            "Solutions IA spécifiques par secteur d'activité",
            "Études de cas réels et retours d'expérience",
            "Création de vidéos IA avec Synthesia",
            "Atelier: Production de contenu multimédia avancé"
          ],
          afternoon: [
            "Plateformes no-code pour l'IA",
            "Création d'applications sans programmation",
            "Intégration de Mistral Large 2 dans les workflows",
            "Exercices pratiques: Développement d'une solution no-code"
          ]
        },
        {
          day: "Jour 4: Projet Intégré et Évaluation",
          morning: [
            "Conception d'un projet complet",
            "Développement de la solution",
            "Tests et optimisation",
            "Préparation de la présentation"
          ],
          afternoon: [
            "Finalisation du projet",
            "Présentation des réalisations",
            "Évaluation et feedback",
            "Plan d'implémentation en entreprise"
          ]
        }
      ],
      prerequisites: [
        "Connaissance des concepts de base de l'IA",
        "Expérience avec les outils IA grand public",
        "Compréhension des enjeux métier"
      ],
      targetAudience: [
        "Professionnels ayant déjà une expérience en IA",
        "Chefs de projets techniques",
        "Développeurs et intégrateurs",
        "Consultants en transformation digitale"
      ],
      evaluation: [
        "Évaluation continue des exercices pratiques",
        "Projet d'intégration complet",
        "Présentation finale devant le groupe",
        "Évaluation des compétences techniques acquises"
      ],
      project: {
        title: "Automatisation et Solutions Sectorielles",
        description: "Développez des workflows IA automatisés et des solutions personnalisées pour votre secteur d'activité.",
        components: [
          {
            name: "LangChain",
            description: "Framework pour développer des applications utilisant des LLM avec orchestration de chaînes de traitement"
          },
          {
            name: "Pinecone",
            description: "Base de données vectorielle pour stocker et rechercher des embeddings, facilitant la recherche sémantique"
          },
          {
            name: "Synthesia",
            description: "Plateforme de création vidéo IA permettant de générer des présentateurs virtuels à partir de scripts"
          },
          {
            name: "Mistral Large 2",
            description: "Modèle de langage avancé offrant des performances de pointe pour des tâches complexes"
          }
        ]
      }
    },
    {
      title: "Développement Avancé et Déploiement de Solutions IA",
      duration: "5 jours (35 heures)",
      level: "Expert",
      image: "https://images.pexels.com/photos/8566770/pexels-photo-8566770.jpeg",
      shortDescription: "Formation experte pour concevoir, développer et déployer des solutions IA complexes en entreprise.",
      objectives: [
        "Maîtriser les architectures IA avancées",
        "Développer des systèmes IA complexes",
        "Déployer des solutions en production",
        "Gérer et optimiser les performances"
      ],
      program: [
        {
          day: "Jour 1: Ingénierie des Systèmes IA et LangChain",
          morning: [
            "Architecture avancée des systèmes IA",
            "Modèles de dernière génération (OpenAI o3/o4-mini)",
            "Principes d'ingénierie des systèmes IA robustes",
            "Atelier: Conception d'architecture IA évolutive"
          ],
          afternoon: [
            "LangChain avancé: agents et outils",
            "Création d'agents autonomes",
            "Orchestration de workflows complexes",
            "Exercices pratiques: Développement d'agents spécialisés"
          ]
        },
        {
          day: "Jour 2: Retrieval Augmented Generation (RAG)",
          morning: [
            "Principes fondamentaux du RAG",
            "Création d'embeddings et vectorisation",
            "Bases de données vectorielles avancées (Weaviate)",
            "Atelier: Implémentation d'un système RAG de base"
          ],
          afternoon: [
            "RAG avancé: techniques d'optimisation",
            "Intégration de sources de données hétérogènes",
            "Évaluation et amélioration des réponses",
            "Exercices pratiques: RAG sur documents d'entreprise"
          ]
        },
        {
          day: "Jour 3: Développement No-Code Avancé et API",
          morning: [
            "Plateformes no-code avancées pour l'IA",
            "Intégration de modèles personnalisés",
            "Création d'interfaces utilisateur sophistiquées",
            "Atelier: Développement d'une application métier complète"
          ],
          afternoon: [
            "Conception et développement d'API IA",
            "Intégration avec DeepSeek R1 et Amazon Nova Pro",
            "Sécurisation des API et gestion des accès",
            "Exercices pratiques: Création d'une API IA complète"
          ]
        },
        {
          day: "Jour 4: Déploiement et Monitoring",
          morning: [
            "Stratégies de déploiement de solutions IA",
            "Infrastructure cloud pour l'IA",
            "Optimisation des performances et des coûts",
            "Atelier: Déploiement d'une solution IA en production"
          ],
          afternoon: [
            "Monitoring et observabilité des systèmes IA",
            "Détection et gestion des dérives",
            "Mise en place de tableaux de bord analytiques",
            "Exercices pratiques: Configuration du monitoring"
          ]
        },
        {
          day: "Jour 5: Projet Final et Évaluation",
          morning: [
            "Finalisation du projet d'entreprise",
            "Tests de performance et optimisation",
            "Préparation de la documentation",
            "Revue de code et bonnes pratiques"
          ],
          afternoon: [
            "Présentation des projets",
            "Évaluation technique approfondie",
            "Feedback et recommandations",
            "Plan de déploiement en production"
          ]
        }
      ],
      prerequisites: [
        "Expérience significative en développement IA",
        "Maîtrise des concepts d'automatisation",
        "Connaissance des architectures cloud",
        "Compréhension des enjeux de production"
      ],
      targetAudience: [
        "Architectes solutions",
        "Développeurs seniors",
        "Tech leads",
        "Experts en IA souhaitant se perfectionner"
      ],
      evaluation: [
        "Évaluation continue des travaux pratiques",
        "Projet technique complet",
        "Soutenance technique détaillée",
        "Évaluation des compétences d'architecture et de déploiement"
      ],
      project: {
        title: "Déploiement de Solutions IA Entreprise",
        description: "Concevez et déployez des systèmes IA complexes en production avec une approche entreprise.",
        components: [
          {
            name: "OpenAI o3/o4-mini",
            description: "Dernière génération de modèles OpenAI offrant des capacités de raisonnement et de génération avancées"
          },
          {
            name: "Weaviate",
            description: "Base de données vectorielle open-source avec capacités avancées de recherche sémantique et de filtrage"
          },
          {
            name: "DeepSeek R1",
            description: "Modèle spécialisé dans le raisonnement et la résolution de problèmes complexes"
          },
          {
            name: "Amazon Nova Pro",
            description: "Suite d'outils IA d'entreprise pour le déploiement et la gestion de solutions IA à grande échelle"
          }
        ]
      }
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Nos Parcours de Formation en Intelligence Artificielle" 
          subtitle="Des formations progressives adaptées à tous les niveaux, du débutant à l'expert."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedCourse(index)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Voir le détail
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedCourse !== null && (
          <CourseDetail
            isOpen={true}
            onClose={() => setSelectedCourse(null)}
            course={courses[selectedCourse]}
          />
        )}
      </div>
    </div>
  );
};

export default QualiopiCourses;