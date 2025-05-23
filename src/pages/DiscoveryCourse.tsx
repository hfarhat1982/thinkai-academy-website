import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, BookOpen, Award, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import PrerequisitesSection from '../components/PrerequisitesSection';

const DiscoveryCourse: React.FC = () => {
  const prerequisites = [
    "Aucun prérequis technique spécifique",
    "Maîtrise basique de l'outil informatique",
    "Curiosité pour l'IA et ses applications",
    "Volonté d'apprendre et d'expérimenter"
  ];

  const targetAudience = [
    "Professionnels souhaitant découvrir l'IA",
    "Managers et décideurs",
    "Entrepreneurs et porteurs de projets",
    "Toute personne intéressée par l'IA et son impact"
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Parcours 'Découverte Light' d'1 Jour pour Débutants en IA" 
          subtitle="Face à la demande croissante d'initiations accessibles en IA, ce nouveau parcours de 1 jour (7h) vise à démocratiser les concepts fondamentaux tout en respectant les critères Qualiopi. Conçu pour des apprenants sans prérequis techniques, il combine théorie simplifiée et ateliers pratiques immédiatement applicables."
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <BookOpen className="mr-2 h-6 w-6" />
                Initiation à l'IA en une journée
              </h3>
              <div className="flex flex-wrap items-center mt-4 mb-6">
                <span className="flex items-center mr-6 mb-2 sm:mb-0">
                  <Calendar className="mr-1 h-4 w-4" />
                  1 jour
                </span>
                <span className="flex items-center mr-6 mb-2 sm:mb-0">
                  <Clock className="mr-1 h-4 w-4" />
                  7 heures
                </span>
                <span className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  Aucun prérequis technique
                </span>
              </div>
              <p className="mb-6">
                Une journée intensive pour découvrir les fondamentaux de l'IA et ses applications pratiques immédiates. Idéal pour les professionnels souhaitant comprendre rapidement les enjeux et opportunités de l'IA dans leur secteur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="bg-white text-blue-700 hover:bg-gray-100">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/parcours-qualiopi">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Voir tous les parcours
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                alt="Formation IA découverte" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Prerequisites and Target Audience Section */}
        <PrerequisitesSection 
          prerequisites={prerequisites}
          targetAudience={targetAudience}
          className="mb-12"
        />

        {/* Structure Pédagogique */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-blue-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Structure Pédagogique</h3>
          </div>
          <div className="p-6">
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Matinée : Fondamentaux de l'IA (3h30)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-3">Introduction aux Concepts Clés (1h30)</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Qu'est-ce que l'IA générative et comment fonctionne-t-elle ?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Panorama des technologies accessibles aux non-techniciens</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cas d'usage concrets dans différents secteurs d'activité</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Enjeux éthiques et limites à connaître</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-3">Prise en Main d'Outils Basiques (2h)</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Premiers pas avec ChatGPT Lite : interface et possibilités</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Création d'images simples avec DALL-E Mini</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Initiation à Gamma pour les présentations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Exercices guidés sur chaque outil</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Après-Midi : Mise en Pratique Guidée (3h30)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-3">Atelier 1 : Automatisation de Tâches Courantes</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Rédaction assistée de courriels professionnels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Création de résumés automatiques de documents</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Analyse de données simples avec l'IA</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Création de templates réutilisables</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-3">Atelier 2 : Création de Contenu Multimédia</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Conception d'une présentation professionnelle avec Gamma</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Génération d'illustrations personnalisées</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Création d'un mini-projet adapté au secteur d'activité</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Évaluation et feedback sur les réalisations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modalités Pédagogiques */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-indigo-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Modalités Pédagogiques Adaptées</h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aspect
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Approche
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bénéfice Qualiopi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Rythme d'apprentissage
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Alternance de théorie (40%) et pratique (60%)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Favorise l'acquisition de compétences concrètes (Critère 1)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Supports pédagogiques
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Fiches synthétiques, guides pas-à-pas, accès aux outils
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Adaptation aux publics bénéficiaires (Critère 4)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Évaluation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Mini-projet final avec grille d'auto-évaluation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Mesure objective des acquis (Critère 2)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Suivi post-formation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Accès 30 jours aux ressources + session Q&R à J+15
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Accompagnement et suivi des apprenants (Critère 5)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Outils Recommandés */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-purple-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Outils Recommandés (Compatibles Qualiopi)</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Plateforme LMS</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Teachizy</strong> - Plateforme intuitive permettant le suivi des apprenants et l'accès aux ressources pédagogiques.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Interface simplifiée adaptée aux débutants</li>
                  <li>• Suivi des progrès en temps réel</li>
                  <li>• Génération automatique d'attestations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Suivi des Apprenants</h4>
                <p className="text-gray-700 mb-3">
                  Système de suivi intégré permettant d'évaluer la progression et l'engagement des participants.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Tableaux de bord personnalisés</li>
                  <li>• Alertes d'engagement</li>
                  <li>• Rapports conformes Qualiopi</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Ressources Pédagogiques</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Mooc "Objectif IA"</strong> - Module complémentaire en ligne pour approfondir les connaissances.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Vidéos courtes et interactives</li>
                  <li>• Quiz d'auto-évaluation</li>
                  <li>• Mises à jour trimestrielles</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Kit "Prompt Engineering pour Débutants"</h4>
                <p className="text-gray-700 mb-3">
                  Ensemble de fiches pratiques et templates pour formuler des requêtes efficaces.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 20 templates prêts à l'emploi</li>
                  <li>• Guide d'optimisation des prompts</li>
                  <li>• Exemples sectoriels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projet Final */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-green-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Exemple de Projet Final : Assistant Personnel de Productivité</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-6">
              À la fin de la journée, chaque participant aura créé son propre "Assistant Personnel de Productivité" adapté à son métier, comprenant :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-3">1. Templates personnalisés</h4>
                <p className="text-gray-700">
                  Ensemble de prompts optimisés pour les tâches récurrentes spécifiques au poste de l'apprenant (rédaction d'emails, création de rapports, analyse de données, etc.).
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-3">2. Présentation visuelle</h4>
                <p className="text-gray-700">
                  Support de présentation créé avec Gamma, incluant des visuels générés par IA, pour partager les apprentissages avec son équipe.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-3">3. Plan d'action</h4>
                <p className="text-gray-700">
                  Feuille de route personnalisée pour intégrer progressivement l'IA dans son quotidien professionnel, avec objectifs à 7, 30 et 90 jours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conformité Qualiopi */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-blue-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Award className="mr-2 h-6 w-6" />
              Conformité Qualiopi - Points Clés
            </h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Critère Qualiopi
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mise en œuvre dans le parcours découverte
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1. Information du public
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Programme détaillé, prérequis et objectifs clairement définis
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    2. Identification des objectifs
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Compétences visées explicites et mesurables via le projet final
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    3. Adaptation aux publics
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Format accessible aux non-techniciens, rythme adapté, supports simplifiés
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    4. Moyens pédagogiques
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Alternance théorie/pratique, outils accessibles, exercices guidés
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    5. Qualification des formateurs
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Intervenants certifiés en IA avec expérience pédagogique
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    6. Suivi et évaluation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Projet évalué, suivi post-formation, session Q&R à J+15
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    7. Amélioration continue
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Questionnaire de satisfaction, mise à jour trimestrielle du contenu
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Conclusion</h3>
          <p className="text-gray-700 mb-6">
            Ce format condensé répond aux besoins des entreprises souhaitant sensibiliser rapidement leurs équipes tout en validant les exigences Qualiopi. L'accent sur l'aspect ludique et concret maximise l'engagement des participants et facilite l'application immédiate des compétences acquises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="primary">
                Demander un devis
              </Button>
            </Link>
            <Link to="/parcours-qualiopi">
              <Button variant="outline">
                Découvrir nos autres parcours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCourse;