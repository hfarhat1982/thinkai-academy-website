import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Award, BookOpen, Zap, Users, Calendar } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Formations en Intelligence Artificielle
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Des parcours adaptés à tous les niveaux pour maîtriser les outils IA de 2025 et transformer votre entreprise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/parcours-qualiopi">
                  <Button variant="primary" size="lg">
                    Découvrir nos parcours
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                alt="Formation IA" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Pourquoi choisir nos formations IA ?" 
            subtitle="Des formations conçues pour répondre aux besoins du marché 2025."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card 
              title="Certification Qualiopi" 
              icon={<Award className="w-12 h-12 text-blue-600" />}
            >
              <p>Nos formations respectent les 7 critères de qualité exigés par la certification Qualiopi, garantissant excellence et reconnaissance officielle.</p>
            </Card>
            
            <Card 
              title="Parcours Progressifs" 
              icon={<BookOpen className="w-12 h-12 text-indigo-600" />}
            >
              <p>Du débutant à l'expert, nos parcours s'adaptent à votre niveau et à vos objectifs, avec des formats de 1 à 5 jours selon vos besoins.</p>
            </Card>
            
            <Card 
              title="Outils IA 2025" 
              icon={<Zap className="w-12 h-12 text-purple-600" />}
            >
              <p>Maîtrisez les derniers outils d'IA générative et les tendances émergentes comme les agents autonomes et l'hyperautomatisation.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Nos formations en Intelligence Artificielle" 
            subtitle="Découvrez nos différentes offres de formation adaptées à vos besoins."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Comparatif de Formation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Comparez les meilleures formations IA courtes du marché (≤5 jours) et trouvez celle qui correspond à vos besoins et votre budget.
                </p>
                <Link to="/formations-courtes">
                  <Button variant="outline">Voir le comparatif</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold">Nos Parcours IA</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Des parcours progressifs de 3 à 5 jours, du niveau débutant à expert, conçus pour répondre aux exigences de la certification Qualiopi.
                </p>
                <Link to="/parcours-qualiopi">
                  <Button variant="outline">Découvrir les parcours</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-semibold">Parcours Découverte 1 Jour</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Une initiation condensée d'une journée pour découvrir les fondamentaux de l'IA et ses applications pratiques immédiates.
                </p>
                <Link to="/parcours-decouverte">
                  <Button variant="outline">En savoir plus</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">Outils IA & Tendances 2024-2025</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Découvrez les outils IA les plus récents et les tendances émergentes intégrés dans nos formations pour rester à la pointe.
                </p>
                <Link to="/outils-ia">
                  <Button variant="outline">Explorer les outils</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Ce que disent nos apprenants" 
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "La formation a parfaitement répondu à mes attentes. J'ai pu mettre en pratique les connaissances acquises dès mon retour en entreprise."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Sophie M.</p>
                  <p className="text-sm text-gray-500">Responsable Innovation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellente pédagogie et contenu à jour avec les dernières avancées en IA. Le formateur a su adapter le contenu à notre secteur d'activité."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Thomas L.</p>
                  <p className="text-sm text-gray-500">Chef de projet digital</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Le parcours expert m'a permis de monter en compétence rapidement sur les outils IA avancés. La certification Qualiopi est un vrai plus pour mon CV."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Julie D.</p>
                  <p className="text-sm text-gray-500">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à développer vos compétences en IA ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour obtenir plus d'informations sur nos formations ou pour demander un devis personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Nous contacter
              </Button>
            </Link>
            <Link to="/parcours-qualiopi">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Voir tous les parcours
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;