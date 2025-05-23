import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const ShortCourses: React.FC = () => {
  const courses = [
    {
      name: "Comundi – IA Générative : gagner en efficacité pro",
      duration: "2 jours",
      price: "1 490 € HT",
      reviews: "1 262 (Avis-vérifiés)",
      link: "#"
    },
    {
      name: "DataScientest – Prompt Engineering & IA Générative",
      duration: "2 jours",
      price: "1 990 €",
      reviews: "1 000+ (alumni)",
      link: "#"
    },
    {
      name: "Jedha – Prompt Engineer (bootcamp IA)",
      duration: "42 h (≈5 jours)",
      price: "1 500 €",
      reviews: "936 (Google, SwitchUp, Trustpilot)",
      link: "#"
    },
    {
      name: "Wild Code School – Formation IA (skill course 55h)",
      duration: "55 h (~7,5 jours)",
      price: "Non communiqué",
      reviews: "580 (Google, Trustpilot, SwitchUp…)",
      link: "#"
    },
    {
      name: "Orsys – IA en entreprise, état de l'art",
      duration: "2 jours (14 h)",
      price: "2 140 € HT",
      reviews: "4/5 (111 205 avis Orsys)",
      link: "#"
    },
    {
      name: "M2i Formation – Immersion IA (fondamentaux)",
      duration: "3 jours (21 h)",
      price: "2 550 € HT",
      reviews: "72 (évaluations sur site)",
      link: "#"
    },
    {
      name: "Cegos – Fondamentaux IA & Big Data",
      duration: "2 jours (14 h)",
      price: "1 550 € HT",
      reviews: "12 (Avis stagiaires)",
      link: "#"
    },
    {
      name: "Demos – Pratiquer l'IA générative (ChatGPT, etc.)",
      duration: "2 jours (14 h)",
      price: "1 590 € HT",
      reviews: "– (pas de données publiques)",
      link: "#"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Formations Courtes Comparées" 
          subtitle="Comparatif des formations IA courtes (≤5 jours) disponibles sur le marché avec leurs caractéristiques clés."
        />

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Formation (organisme)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Durée
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix (TTC/HT)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nb d'avis
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lien
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {course.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.reviews}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={course.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Voir
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <p className="text-gray-700 mb-4">
            Les prix indiqués sont ceux mentionnés sur les sites officiels (HT si précisé). Le nombre total d'avis regroupe les évaluations disponibles sur les sites des organismes et plateformes externes (Google, Trustpilot, Avis Vérifiés, etc.).
          </p>
          <p className="text-gray-700">
            Le tri des formations peut être fait selon le rapport qualité-prix ou le nombre d'avis positifs.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Pourquoi choisir nos formations certifiées Qualiopi ?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Des parcours progressifs adaptés à tous les niveaux</li>
            <li>Des contenus à jour avec les dernières avancées en IA</li>
            <li>Des formateurs experts dans leur domaine</li>
            <li>Une certification reconnue par l'État</li>
            <li>Des modalités pédagogiques variées (présentiel, distanciel, blended learning)</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link to="/parcours-qualiopi">
              <Button variant="primary">
                Découvrir nos parcours Qualiopi
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortCourses;