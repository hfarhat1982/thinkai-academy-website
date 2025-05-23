import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, BookOpen, Users, Monitor } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const QualiopiCommitment: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Qualiopi : Gage de Qualité de nos Formations" 
          subtitle="La certification Qualiopi atteste de la qualité du processus mis en œuvre par les prestataires d'actions concourant au développement des compétences."
        />

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <Award className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Certification Qualiopi</h3>
                <p className="text-gray-600">Référentiel National Qualité</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              La certification Qualiopi est délivrée au titre des catégories d'actions suivantes : actions de formation, bilans de compétences, actions permettant de valider les acquis de l'expérience et actions de formation par apprentissage.
            </p>
            <p className="text-gray-700 mb-4">
              Nos formations en Intelligence Artificielle sont conçues pour répondre aux 7 critères du référentiel national qualité, garantissant ainsi :
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Une information claire et transparente sur nos offres</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Des objectifs pédagogiques précis et mesurables</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Une adaptation aux publics bénéficiaires</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Des moyens pédagogiques adaptés et innovants</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Des formateurs qualifiés et experts en IA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Un suivi rigoureux et une évaluation des acquis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Une démarche d'amélioration continue</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modalités Pédagogiques */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-blue-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Modalités Pédagogiques
            </h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Format
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avantages
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Présentiel
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Formation en salle avec formateur et participants physiquement présents
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Interactions directes</li>
                      <li>Accompagnement personnalisé</li>
                      <li>Dynamique de groupe</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Distanciel synchrone
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Formation en ligne en temps réel avec formateur et participants connectés simultanément
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Flexibilité géographique</li>
                      <li>Économie de déplacement</li>
                      <li>Interactions en temps réel</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    E-learning
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Formation en ligne asynchrone avec contenu accessible à tout moment
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Flexibilité horaire</li>
                      <li>Rythme personnalisé</li>
                      <li>Contenu standardisé</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Blended learning
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Combinaison de présentiel et distanciel (synchrone ou asynchrone)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Optimisation du temps</li>
                      <li>Variété des approches</li>
                      <li>Meilleure rétention</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modalités d'Évaluation */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-indigo-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Modalités d'Évaluation
            </h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Niveau
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Méthodes d'évaluation
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Critères de réussite
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Débutant
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>QCM de connaissances</li>
                      <li>Exercices pratiques guidés</li>
                      <li>Projet simple d'application</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>70% de réussite au QCM</li>
                      <li>Réalisation complète des exercices</li>
                      <li>Projet fonctionnel basique</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Intermédiaire
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Études de cas sectorielles</li>
                      <li>Mise en situation professionnelle</li>
                      <li>Projet d'intégration IA</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Pertinence des solutions proposées</li>
                      <li>Autonomie dans la mise en œuvre</li>
                      <li>Qualité de l'intégration</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Expert
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Projet complexe de bout en bout</li>
                      <li>Présentation technique détaillée</li>
                      <li>Évaluation par les pairs</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Fonctionnalité complète du projet</li>
                      <li>Optimisation et bonnes pratiques</li>
                      <li>Documentation et transfert de compétences</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Plateformes LMS */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-purple-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Monitor className="mr-2 h-6 w-6" />
              Plateformes LMS Recommandées (Compatibles Qualiopi)
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">iSpring Learn</h4>
                <p className="text-gray-700 mb-3">
                  Plateforme complète avec suivi détaillé des apprenants et rapports conformes aux exigences Qualiopi.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Interface intuitive et personnalisable</li>
                  <li>• Rapports automatisés pour certification</li>
                  <li>• Intégration multimédia avancée</li>
                  <li>• Suivi des compétences acquises</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">360 Learning</h4>
                <p className="text-gray-700 mb-3">
                  Solution collaborative permettant l'apprentissage social et le partage de connaissances entre apprenants.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Création collaborative de contenu</li>
                  <li>• Forums et espaces d'échange</li>
                  <li>• Gamification de l'apprentissage</li>
                  <li>• Analytics avancés pour formateurs</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Teachizy</h4>
                <p className="text-gray-700 mb-3">
                  Plateforme française spécialisée dans la conformité aux exigences réglementaires de formation.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Conformité RGPD et Qualiopi native</li>
                  <li>• Génération automatique des documents légaux</li>
                  <li>• Parcours adaptatifs selon les profils</li>
                  <li>• Support technique dédié</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Agora Learning</h4>
                <p className="text-gray-700 mb-3">
                  Solution spécialisée dans l'apprentissage mixte avec forte composante sociale et collaborative.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Classes virtuelles intégrées</li>
                  <li>• Outils de collaboration en temps réel</li>
                  <li>• Bibliothèque de ressources partagées</li>
                  <li>• Évaluation par compétences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Conformité Qualiopi */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-blue-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Award className="mr-2 h-6 w-6" />
              Conformité Qualiopi - Tableau de Synthèse
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
                    Mise en œuvre dans nos formations IA
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1. Information du public
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Fiches détaillées des formations</li>
                      <li>Prérequis clairement identifiés</li>
                      <li>Tarifs et modalités d'accès transparents</li>
                      <li>Délais d'accès précisés</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    2. Identification des objectifs
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Objectifs pédagogiques mesurables</li>
                      <li>Compétences visées explicites</li>
                      <li>Positionnement préalable des apprenants</li>
                      <li>Adaptation aux besoins professionnels</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    3. Adaptation aux publics
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Parcours adaptés par niveau (débutant à expert)</li>
                      <li>Prise en compte des contraintes spécifiques</li>
                      <li>Adaptation aux secteurs d'activité</li>
                      <li>Accessibilité pour personnes en situation de handicap</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    4. Moyens pédagogiques
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Alternance théorie/pratique (40%/60%)</li>
                      <li>Supports pédagogiques actualisés</li>
                      <li>Accès aux outils IA pendant la formation</li>
                      <li>Environnements techniques adaptés</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    5. Qualification des formateurs
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Experts certifiés en IA</li>
                      <li>Expérience professionnelle significative</li>
                      <li>Formation continue des formateurs</li>
                      <li>Évaluation régulière des compétences</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    6. Suivi et évaluation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Évaluations formatives et sommatives</li>
                      <li>Projets pratiques évalués</li>
                      <li>Suivi post-formation (30 jours)</li>
                      <li>Attestations détaillées des acquis</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    7. Amélioration continue
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      <li>Recueil systématique des appréciations</li>
                      <li>Mise à jour trimestrielle des contenus</li>
                      <li>Veille technologique permanente</li>
                      <li>Prise en compte des réclamations</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <Award className="mr-2 h-6 w-6" />
            Notre engagement qualité
          </h3>
          <p className="text-gray-700 mb-6">
            Notre formation en intelligence artificielle est conçue pour répondre pleinement aux exigences de la certification Qualiopi, garantissant ainsi une qualité pédagogique optimale et une reconnaissance officielle. Nous nous engageons à maintenir ces standards élevés et à faire évoluer continuellement nos contenus pour rester à la pointe des avancées technologiques en IA.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/parcours-qualiopi">
              <Button variant="primary">
                Découvrir nos parcours certifiés
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualiopiCommitment;