import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Cpu, Bot, Lightbulb, Layers, ArrowRight, ChevronRight, ChevronDown, ChevronUp, Brain, MessageSquare, Image, Video, Database, Code, Music, FileText, Presentation, Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

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

interface ToolDetailProps {
  isOpen: boolean;
  onClose: () => void;
  tool: {
    title: string;
    category: string;
    description: string;
    features: string[];
    useCases: string[];
    pricing: {
      free?: string;
      paid?: string;
    };
    alternatives: {
      name: string;
      description: string;
    }[];
  };
}

const ToolDetail: React.FC<ToolDetailProps> = ({ isOpen, onClose, tool }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{tool.title}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <ExpandableSection 
            title="Description et Fonctionnalités" 
            icon={<Lightbulb className="w-6 h-6 text-blue-600" />}
          >
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités clés :</h4>
            <ul className="space-y-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          <ExpandableSection 
            title="Cas d'Usage" 
            icon={<Zap className="w-6 h-6 text-blue-600" />}
          >
            <ul className="space-y-2">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </ExpandableSection>

          <ExpandableSection 
            title="Tarification" 
            icon={<Layers className="w-6 h-6 text-blue-600" />}
          >
            <div className="space-y-4">
              {tool.pricing.free && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Version Gratuite</h5>
                  <p className="text-green-700">{tool.pricing.free}</p>
                </div>
              )}
              {tool.pricing.paid && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">Version Payante</h5>
                  <p className="text-blue-700">{tool.pricing.paid}</p>
                </div>
              )}
            </div>
          </ExpandableSection>

          <ExpandableSection 
            title="Alternatives" 
            icon={<Bot className="w-6 h-6 text-blue-600" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.alternatives.map((alternative, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">{alternative.name}</h5>
                  <p className="text-gray-700">{alternative.description}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>

          <div className="flex justify-end mt-6">
            <Link to="/contact">
              <Button variant="primary">
                Demander une démonstration
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AITools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);

  const categories = [
    {
      title: "Chatbots et Assistants",
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      shortDescription: "Assistants conversationnels et outils de dialogue basés sur l'IA.",
      tools: [
        {
          title: "Gemini 2.5 Pro",
          shortDescription: "Assistant multimodal de Google avec capacités avancées",
          description: "Dernière version de l'assistant IA de Google, offrant des capacités multimodales et une compréhension contextuelle améliorée.",
          features: [
            "Traitement multimodal (texte, images, audio)",
            "Compréhension contextuelle avancée",
            "Génération de code optimisée",
            "API flexible et extensible"
          ],
          useCases: [
            "Développement d'applications",
            "Analyse de données multimodales",
            "Création de contenu cross-média",
            "Automatisation de tâches complexes"
          ],
          pricing: {
            free: "Version gratuite avec limites",
            paid: "Tarification à l'utilisation pour l'API"
          },
          alternatives: [
            {
              name: "GPT-4 Turbo",
              description: "Version améliorée du modèle d'OpenAI"
            },
            {
              name: "Claude 3 Sonnet",
              description: "Assistant IA d'Anthropic avec focus éthique"
            }
          ]
        },
        {
          title: "Claude 3 Opus",
          shortDescription: "Assistant IA le plus avancé d'Anthropic",
          description: "Modèle de langage de pointe offrant des capacités de raisonnement et d'analyse exceptionnelles.",
          features: [
            "Raisonnement complexe",
            "Analyse approfondie de documents",
            "Génération de contenu structuré",
            "Sécurité et éthique renforcées"
          ],
          useCases: [
            "Recherche académique",
            "Analyse juridique",
            "Rédaction technique",
            "Conseil stratégique"
          ],
          pricing: {
            paid: "Abonnement mensuel ou tarification API"
          },
          alternatives: [
            {
              name: "GPT-4",
              description: "Alternative puissante d'OpenAI"
            },
            {
              name: "Gemini Ultra",
              description: "Modèle premium de Google"
            }
          ]
        }
      ]
    },
    {
      title: "Génération d'Images",
      icon: <Image className="w-12 h-12 text-purple-600" />,
      image: "https://images.pexels.com/photos/8566477/pexels-photo-8566477.jpeg",
      shortDescription: "Outils de création et manipulation d'images par IA.",
      tools: [
        {
          title: "Midjourney V6",
          shortDescription: "Générateur d'images artistiques de nouvelle génération",
          description: "Dernière version de Midjourney offrant un contrôle créatif sans précédent et une qualité d'image exceptionnelle.",
          features: [
            "Styles artistiques avancés",
            "Contrôle précis des compositions",
            "Génération haute résolution",
            "Support des prompts complexes"
          ],
          useCases: [
            "Illustration professionnelle",
            "Concept art",
            "Design de produits",
            "Marketing visuel"
          ],
          pricing: {
            paid: "Abonnement mensuel avec différents niveaux"
          },
          alternatives: [
            {
              name: "DALL·E 3",
              description: "Solution d'OpenAI avec intégration ChatGPT"
            },
            {
              name: "Stable Diffusion XL",
              description: "Alternative open-source puissante"
            }
          ]
        },
        {
          title: "Stable Diffusion 3",
          shortDescription: "Nouveau modèle open-source de génération d'images",
          description: "Dernière itération du modèle Stable Diffusion avec des améliorations significatives en qualité et contrôle.",
          features: [
            "Architecture optimisée",
            "Meilleure compréhension des prompts",
            "Génération plus rapide",
            "Personnalisation avancée"
          ],
          useCases: [
            "Création de contenu web",
            "Edition photo professionnelle",
            "Design graphique",
            "Prototypage rapide"
          ],
          pricing: {
            free: "Version open-source gratuite",
            paid: "Services hébergés disponibles"
          },
          alternatives: [
            {
              name: "Midjourney",
              description: "Pour des résultats plus artistiques"
            },
            {
              name: "Leonardo.ai",
              description: "Solution spécialisée pour le design"
            }
          ]
        }
      ]
    },
    {
      title: "Traitement du Langage",
      icon: <Brain className="w-12 h-12 text-indigo-600" />,
      image: "https://images.pexels.com/photos/8566483/pexels-photo-8566483.jpeg",
      shortDescription: "Solutions avancées de traitement du langage naturel.",
      tools: [
        {
          title: "GPT-4 Turbo",
          shortDescription: "Dernière version du modèle phare d'OpenAI",
          description: "Version améliorée de GPT-4 avec une plus grande efficacité et des capacités étendues.",
          features: [
            "Contexte étendu (128k tokens)",
            "Connaissances actualisées",
            "Analyse multimodale",
            "Génération de code améliorée"
          ],
          useCases: [
            "Développement logiciel",
            "Analyse de documents",
            "Création de contenu",
            "Recherche avancée"
          ],
          pricing: {
            paid: "Tarification à l'utilisation via API"
          },
          alternatives: [
            {
              name: "Claude 3",
              description: "Alternative puissante d'Anthropic"
            },
            {
              name: "Gemini Pro",
              description: "Solution de Google Cloud"
            }
          ]
        },
        {
          title: "Mistral Large",
          shortDescription: "Modèle open-source haute performance",
          description: "Modèle de langage développé par Mistral AI, offrant un excellent rapport performance/coût.",
          features: [
            "Architecture optimisée",
            "Faible latence",
            "Support multilingue",
            "Déploiement flexible"
          ],
          useCases: [
            "Applications entreprise",
            "Chatbots personnalisés",
            "Traitement de documents",
            "Analyse de données"
          ],
          pricing: {
            free: "Version open-source disponible",
            paid: "Services managés via API"
          },
          alternatives: [
            {
              name: "LLaMA 3",
              description: "Modèle open-source de Meta"
            },
            {
              name: "Yi-34B",
              description: "Alternative performante de 01.AI"
            }
          ]
        }
      ]
    },
    {
      title: "Génération Audio et Musique",
      icon: <Music className="w-12 h-12 text-green-600" />,
      image: "https://images.pexels.com/photos/8566492/pexels-photo-8566492.jpeg",
      shortDescription: "Outils de création et manipulation audio par IA.",
      tools: [
        {
          title: "Suno AI",
          shortDescription: "Création musicale par description textuelle",
          description: "Plateforme révolutionnaire de génération musicale basée sur des descriptions textuelles.",
          features: [
            "Génération de musique complète",
            "Contrôle des styles et instruments",
            "Export haute qualité",
            "Collaboration en temps réel"
          ],
          useCases: [
            "Production musicale",
            "Bandes sonores",
            "Podcasting",
            "Création de jingles"
          ],
          pricing: {
            free: "Version d'essai limitée",
            paid: "Abonnement professionnel"
          },
          alternatives: [
            {
              name: "AudioCraft",
              description: "Solution audio de Meta"
            },
            {
              name: "MusicLM",
              description: "Générateur musical de Google"
            }
          ]
        }
      ]
    },
    {
      title: "Génération Vidéo",
      icon: <Video className="w-12 h-12 text-red-600" />,
      image: "https://images.pexels.com/photos/8566503/pexels-photo-8566503.jpeg",
      shortDescription: "Solutions de création et édition vidéo par IA.",
      tools: [
        {
          title: "Runway Gen-2",
          shortDescription: "Création vidéo à partir de texte et d'images",
          description: "Plateforme avancée de génération vidéo utilisant l'IA pour créer des contenus dynamiques.",
          features: [
            "Génération de vidéos à partir de texte",
            "Edition vidéo intelligente",
            "Effets spéciaux IA",
            "Export haute qualité"
          ],
          useCases: [
            "Production vidéo",
            "Marketing digital",
            "Réseaux sociaux",
            "Education en ligne"
          ],
          pricing: {
            free: "Version d'essai",
            paid: "Plans professionnels disponibles"
          },
          alternatives: [
            {
              name: "Pika Labs",
              description: "Alternative spécialisée en animation"
            },
            {
              name: "HeyGen",
              description: "Solution pour vidéos d'entreprise"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Catalogue des Outils IA" 
          subtitle="Découvrez notre sélection d'outils IA de pointe, organisés par catégorie pour faciliter votre choix."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center mb-2">
                      {category.icon}
                      <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.shortDescription}</p>
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{tool.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{tool.shortDescription}</p>
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => setSelectedTool(index * 100 + toolIndex)}
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          Voir le détail
                          <ChevronRight className="w-5 h-5 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTool !== null && (
          <ToolDetail
            isOpen={true}
            onClose={() => setSelectedTool(null)}
            tool={categories[Math.floor(selectedTool / 100)].tools[selectedTool % 100]}
          />
        )}
      </div>
    </div>
  );
};

export default AITools;