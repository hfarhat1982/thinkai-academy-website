import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Users, Calendar, BookOpen, CheckCircle, Award, ChevronDown, ChevronUp, Download, Target } from 'lucide-react';
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
    tools?: string[];
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

      // Tools section if available
      if (course.tools && course.tools.length > 0) {
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }
        
        addSectionTitle('Outils Utilisés');
        course.tools.forEach(tool => {
          yPos += addWrappedText(`• ${tool}`, margin, yPos, contentWidth - 10);
        });
      }

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
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
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
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
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

          {course.tools && (
            <ExpandableSection
              title="Outils Utilisés"
              icon={<BookOpen className="w-6 h-6 text-blue-600" />}
            >
              <ul className="space-y-2">
                {course.tools.map((tool, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </ExpandableSection>
          )}

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
      title: "Parcours 'Découverte' (1 jour)",
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
          day: "Matinée : Découverte des Outils IA (9h00-12h30)",
          morning: [
            "Introduction aux concepts clés de l'IA générative",
            "Présentation des principaux outils IA (ChatGPT, Claude, Gemini)",
            "Démonstration des capacités et limites des outils",
            "Cas d'usage concrets par secteur d'activité"
          ],
          afternoon: [
            "Prise en main de ChatGPT et Perplexity",
            "Techniques de base de prompt engineering",
            "Création de contenu assistée par IA",
            "Automatisation de tâches simples"
          ]
        },
        {
          day: "Après-midi : Applications Pratiques (13h30-17h00)",
          morning: [
            "Atelier pratique : rédaction assistée par IA",
            "Création de visuels avec DALL-E et Midjourney",
            "Recherche avancée avec Perplexity",
            "Utilisation de Gamma pour les présentations"
          ],
          afternoon: [
            "Projet personnel : création d'un assistant IA personnalisé",
            "Mise en place de templates réutilisables",
            "Évaluation des acquis et feedback",
            "Plan d'action personnel pour intégrer l'IA au quotidien"
          ]
        }
      ],
      prerequisites: [
        "Aucun prérequis technique spécifique",
        "Maîtrise basique de l'outil informatique",
        "Curiosité pour l'IA et ses applications",
        "Volonté d'apprendre et d'expérimenter"
      ],
      evaluation: [
        "Mini-projet final avec grille d'auto-évaluation",
        "Évaluation continue pendant les ateliers pratiques",
        "Présentation des réalisations en fin de journée",
        "Accès 30 jours aux ressources + session Q&R à J+15"
      ],
      tools: [
        "ChatGPT (OpenAI)",
        "Claude (Anthropic)",
        "Gemini (Google)",
        "Perplexity (Recherche augmentée)",
        "DALL-E / Midjourney (Génération d'images)",
        "Gamma (Présentations)"
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
      title: "Parcours 'IA Débutant + Automatisation' (2 jours)",
      duration: "2 jours (14 heures)",
      level: "Débutant",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
      shortDescription: "Maîtrisez les fondamentaux de l'IA et apprenez à automatiser vos tâches quotidiennes pour gagner en productivité.",
      objectives: [
        "Maîtriser les concepts fondamentaux de l'IA générative",
        "Développer des compétences avancées en prompt engineering",
        "Créer des workflows d'automatisation simples",
        "Intégrer l'IA dans ses outils professionnels quotidiens"
      ],
      program: [
        {
          day: "JOUR 1 - Maîtrise des Fondamentaux (9h00-17h00)",
          morning: [
            "Introduction aux modèles de langage (LLM) et à l'IA générative",
            "Panorama des outils IA : ChatGPT, Claude, Gemini, Perplexity",
            "Principes fondamentaux du prompt engineering",
            "Atelier pratique : création de prompts efficaces"
          ],
          afternoon: [
            "Techniques avancées de prompt engineering",
            "Création de templates pour tâches récurrentes",
            "Génération de contenu multimédia (texte, images, présentations)",
            "Projet guidé : assistant IA personnalisé"
          ]
        },
        {
          day: "JOUR 2 - Application Métier et Workflows Avancés (9h00-17h00)",
          morning: [
            "Intégration de l'IA dans les outils bureautiques",
            "Automatisation de tâches avec NotebookLM",
            "Création de workflows simples avec n8n",
            "Atelier pratique : automatisation d'une chaîne de traitement"
          ],
          afternoon: [
            "Applications sectorielles (marketing, RH, finance, etc.)",
            "Création d'un projet d'automatisation personnalisé",
            "Présentation des projets et feedback",
            "Plan d'action pour l'implémentation en entreprise"
          ]
        }
      ],
      prerequisites: [
        "Aucun prérequis technique spécifique",
        "Maîtrise des outils bureautiques de base",
        "Intérêt pour l'automatisation des tâches",
        "Volonté d'optimiser ses processus de travail"
      ],
      evaluation: [
        "Projet d'automatisation évalué sur critères fonctionnels",
        "Évaluation continue pendant les ateliers",
        "QCM de validation des connaissances théoriques",
        "Présentation du projet final devant le groupe"
      ],
      tools: [
        "ChatGPT (OpenAI)",
        "Claude (Anthropic)",
        "Gemini (Google)",
        "Perplexity (Recherche augmentée)",
        "NotebookLM (Google)",
        "n8n (Automatisation de workflows)"
      ],
      project: {
        title: "Workflow d'Automatisation Personnalisé",
        description: "Création d'un workflow d'automatisation adapté à votre métier, intégrant plusieurs outils IA pour optimiser un processus spécifique.",
        components: [
          {
            name: "Analyse de processus",
            description: "Identification et documentation d'un processus métier à optimiser avec cartographie des tâches automatisables"
          },
          {
            name: "Chaîne d'automatisation",
            description: "Mise en place d'un workflow avec n8n intégrant au moins deux outils IA différents pour automatiser le processus identifié"
          },
          {
            name: "Documentation technique",
            description: "Guide d'utilisation et de maintenance du workflow pour permettre son déploiement et son évolution"
          },
          {
            name: "Présentation des résultats",
            description: "Démonstration du workflow et analyse des gains de productivité estimés (temps, qualité, coûts)"
          }
        ]
      }
    },
    {
      title: "Parcours 'IA Intermédiaire' (3 jours)",
      duration: "3 jours (21 heures)",
      level: "Intermédiaire",
      image: "https://images.pexels.com/photos/8566535/pexels-photo-8566535.jpeg",
      shortDescription: "Développez des compétences avancées en IA et créez des agents métier pour automatiser des workflows complexes.",
      objectives: [
        "Maîtriser les techniques avancées de prompt engineering",
        "Créer et orchestrer des agents IA spécialisés",
        "Développer des workflows métier complexes",
        "Intégrer l'IA dans les processus d'entreprise existants"
      ],
      program: [
        {
          day: "JOUR 1 - Prompt Engineering Avancé et Orchestration (9h00-17h00)",
          morning: [
            "Techniques avancées de prompt engineering (chaînage, few-shot learning)",
            "Création de personas IA spécialisés",
            "Principes d'orchestration d'agents IA",
            "Atelier pratique : conception d'agents spécialisés"
          ],
          afternoon: [
            "Introduction à LangChain pour l'orchestration",
            "Création d'agents avec mémoire et contexte",
            "Intégration de sources de données externes",
            "Projet guidé : orchestrateur multi-agents"
          ]
        },
        {
          day: "JOUR 2 - Agents Métier et Workflows Complexes (9h00-17h00)",
          morning: [
            "Conception d'agents métier spécialisés",
            "Techniques de RAG (Retrieval Augmented Generation)",
            "Intégration de bases de connaissances privées",
            "Atelier pratique : agent avec mémoire d'entreprise"
          ],
          afternoon: [
            "Création de workflows métier complexes",
            "Automatisation de processus multi-étapes",
            "Gestion des erreurs et des exceptions",
            "Projet guidé : workflow métier complet"
          ]
        },
        {
          day: "JOUR 3 - Optimisation et Déploiement (9h00-17h00)",
          morning: [
            "Optimisation des performances des agents IA",
            "Techniques d'évaluation et de test",
            "Sécurité et confidentialité des données",
            "Atelier pratique : optimisation d'un workflow existant"
          ],
          afternoon: [
            "Finalisation du projet d'intégration",
            "Présentation des projets et feedback",
            "Stratégies de déploiement en entreprise",
            "Plan d'action pour l'implémentation"
          ]
        }
      ],
      prerequisites: [
        "Connaissance de base des concepts d'IA générative",
        "Expérience avec les outils IA grand public",
        "Compréhension des processus métier de son organisation",
        "Intérêt pour l'automatisation avancée"
      ],
      evaluation: [
        "Projet d'intégration évalué sur critères fonctionnels et techniques",
        "Évaluation continue pendant les ateliers",
        "Présentation du projet final avec démonstration",
        "Rapport d'analyse des gains potentiels"
      ],
      tools: [
        "ChatGPT (OpenAI) avec plugins",
        "Claude (Anthropic)",
        "Gemini (Google)",
        "LangChain (Orchestration)",
        "n8n (Automatisation avancée)",
        "NotebookLM (Google)",
        "Bases de connaissances personnalisées"
      ],
      project: {
        title: "Système d'Agents Métier Orchestrés",
        description: "Développement d'un système d'agents IA spécialisés et orchestrés pour automatiser un processus métier complexe de votre organisation.",
        components: [
          {
            name: "Architecture multi-agents",
            description: "Conception et implémentation d'un système comprenant au moins trois agents spécialisés (recherche, analyse, synthèse, etc.) travaillant ensemble"
          },
          {
            name: "Orchestrateur central",
            description: "Développement d'un orchestrateur utilisant LangChain pour coordonner les agents et gérer le flux de travail global"
          },
          {
            name: "Intégration de données métier",
            description: "Connexion à au moins une source de données externe (documents, API, base de données) pour enrichir les capacités des agents"
          },
          {
            name: "Interface utilisateur simple",
            description: "Création d'une interface minimaliste permettant aux utilisateurs d'interagir avec le système d'agents"
          }
        ]
      }
    },
    {
      title: "Parcours 'IA Expert' (5 jours)",
      duration: "5 jours (35 heures)",
      level: "Expert",
      image: "https://images.pexels.com/photos/8566770/pexels-photo-8566770.jpeg",
      shortDescription: "Formation experte pour concevoir, développer et déployer des solutions IA complexes en entreprise.",
      objectives: [
        "Maîtriser les architectures IA avancées",
        "Développer des systèmes IA complexes",
        "Déployer des solutions en production",
        "Former et transférer les compétences"
      ],
      program: [
        {
          day: "JOUR 1 - Architecture Système et APIs Avancées (9h00-17h00)",
          morning: [
            "Architecture des systèmes IA modernes",
            "Principes de conception d'agents autonomes",
            "Intégration d'APIs IA avancées",
            "Atelier pratique : conception d'architecture évolutive"
          ],
          afternoon: [
            "Développement avec les APIs OpenAI, Anthropic et Google",
            "Techniques d'optimisation des requêtes",
            "Gestion des coûts et des quotas",
            "Projet guidé : système multi-modèles"
          ]
        },
        {
          day: "JOUR 2 - Développement de Copilots Métier (9h00-17h00)",
          morning: [
            "Conception de copilots IA spécialisés",
            "Techniques avancées de RAG",
            "Intégration de bases de connaissances volumineuses",
            "Atelier pratique : copilot avec mémoire à long terme"
          ],
          afternoon: [
            "Développement d'interfaces conversationnelles avancées",
            "Gestion du contexte et de l'historique",
            "Techniques de fine-tuning et d'adaptation",
            "Projet guidé : copilot métier spécialisé"
          ]
        },
        {
          day: "JOUR 3 - Agents Autonomes et Prise de Décision (9h00-17h00)",
          morning: [
            "Conception d'agents autonomes",
            "Techniques de raisonnement et de planification",
            "Intégration d'outils et d'actions",
            "Atelier pratique : agent avec capacités de raisonnement"
          ],
          afternoon: [
            "Systèmes multi-agents collaboratifs",
            "Mécanismes de prise de décision",
            "Évaluation et amélioration des performances",
            "Projet guidé : système d'agents collaboratifs"
          ]
        },
        {
          day: "JOUR 4 - Déploiement et Production (9h00-17h00)",
          morning: [
            "Stratégies de déploiement de solutions IA",
            "Architectures cloud pour l'IA",
            "Monitoring et observabilité",
            "Atelier pratique : mise en place d'un pipeline de déploiement"
          ],
          afternoon: [
            "Optimisation des performances en production",
            "Gestion des versions et des modèles",
            "Sécurité et conformité",
            "Projet guidé : déploiement d'une solution complète"
          ]
        },
        {
          day: "JOUR 5 - Formation et Transfert de Compétences (9h00-17h00)",
          morning: [
            "Conception de programmes de formation IA",
            "Techniques de transfert de compétences",
            "Documentation technique et fonctionnelle",
            "Atelier pratique : création de matériel de formation"
          ],
          afternoon: [
            "Finalisation et présentation des projets",
            "Évaluation des compétences acquises",
            "Plan de déploiement et d'adoption",
            "Stratégie d'évolution et de maintenance"
          ]
        }
      ],
      prerequisites: [
        "Expérience préalable avec les technologies d'IA générative",
        "Connaissance des principes d'automatisation",
        "Compréhension des enjeux métier et techniques",
        "Capacité à gérer des projets complexes"
      ],
      evaluation: [
        "Projet complet évalué sur critères techniques et fonctionnels",
        "Évaluation continue pendant les ateliers",
        "Présentation finale avec démonstration",
        "Plan de déploiement et de transfert de compétences"
      ],
      tools: [
        "APIs OpenAI (GPT-4, DALL-E)",
        "APIs Anthropic (Claude)",
        "APIs Google (Gemini)",
        "LangChain et LangChain.js",
        "Frameworks d'agents autonomes",
        "Outils de RAG avancés",
        "Plateformes de déploiement cloud"
      ],
      project: {
        title: "Solution IA Entreprise Complète",
        description: "Développement d'une solution IA complète pour un cas d'usage entreprise, de la conception au déploiement et au transfert de compétences.",
        components: [
          {
            name: "Architecture système",
            description: "Conception détaillée de l'architecture technique, incluant les composants IA, les intégrations et les flux de données"
          },
          {
            name: "Système d'agents spécialisés",
            description: "Développement d'un ensemble d'agents IA autonomes et collaboratifs adaptés à un cas d'usage métier spécifique"
          },
          {
            name: "Pipeline de déploiement",
            description: "Mise en place d'un pipeline complet pour le déploiement, le monitoring et la maintenance de la solution"
          },
          {
            name: "Programme de formation",
            description: "Création d'un programme de formation et de transfert de compétences pour les équipes internes"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
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

        {/* Récapitulatif des parcours */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-8">Récapitulatif des Parcours et Progression</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Parcours
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Durée
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Niveau
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Focus
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Outils principaux
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Parcours Découverte</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1 jour
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Débutant
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Initiation et applications immédiates
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ChatGPT, Claude, Perplexity
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">IA Débutant + Automatisation</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2 jours
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Débutant+
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Automatisation et workflows simples
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ChatGPT, NotebookLM, n8n
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-600 font-bold">3</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">IA Intermédiaire</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3 jours
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                      Intermédiaire
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Agents métier et workflows complexes
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    LangChain, APIs IA, RAG
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 font-bold">4</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">IA Expert</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    5 jours
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Expert
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Solutions complètes et transfert de compétences
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    APIs avancées, déploiement, formation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              Tous nos parcours sont certifiés Qualiopi et éligibles aux financements OPCO et CPF. Chaque niveau intègre et approfondit les compétences du niveau précédent.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualiopiCourses;