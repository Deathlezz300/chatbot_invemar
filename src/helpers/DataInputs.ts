import { InputI } from '../interfaces/ChatInterfaces';


export const DataInputs:InputI[]=
[
    {
        placeholder:'Autor',
        nombre:'autor',
        tipo:'texto'
    },
    {
        placeholder:'Abstract',
        nombre:'resumen',
        tipo:'texto'
    },
    {
        placeholder:'Refeered',
        nombre:'revisado',
        tipo:'texto'
    },
    {
        placeholder:'Otros',
        nombre:'otro',
        tipo:'texto'
    },
    {
        placeholder:'Accedido',
        nombre:'fecha_de_acceso',
        tipo:'fecha'
    },
    {
        placeholder:'DOI',
        nombre:'DOI',
        tipo:'texto'
    },
    {
        placeholder:'Tipo documento',
        nombre:'tipo_de_documento',
        tipo:'texto'
    },
    {
        placeholder:'Declaración',
        nombre:'declaracion_de_derechos',
        tipo:'texto'
    },
    {
        placeholder:'Editor',
        nombre:'editor',
        tipo:'texto'
    },
    {
        placeholder:'Palabras claves',
        nombre:'palabras_clave',
        tipo:'texto'
    },
    {
        placeholder:'Estado',
        nombre:'estado',
        tipo:'texto'  
    },
    {
        placeholder:'Lugar cobertura',
        nombre:'lugar_de_cobertura',
        tipo:'texto'
    },
    {
        placeholder:'Fecha disponible',
        nombre:'fecha_disponible',
        tipo:'fecha'
    },
    {
        placeholder:'Titulo principal',
        nombre:'titulo_principal',
        tipo:'texto'
    },
    {
        placeholder:'Tipo colección',
        nombre:'tipo_de_coleccion',
        tipo:'texto'
    },
    {
        placeholder:'Edición',
        nombre:'edition',
        tipo:'texto'
    },
    {
        placeholder:'Corporautor',
        nombre:'autor_corporativo',
        tipo:'texto'
    },
    {
        placeholder:'Contenido',
        nombre:'contenido',
        tipo:'texto'
    },
    {
        placeholder:'Clasificación',
        nombre:'clasificacion',
        tipo:'texto'
    },
    {
        placeholder:'Pais cobertura',
        nombre:'pais_de_cobertura',
        tipo:'texto'
    },
    {
        placeholder:'Fecha publicación',
        nombre:'fecha_de_publicacion',
        tipo:'fecha'
    },
    {
        placeholder:'Titulo alternativo',
        nombre:'titulo_alternativo',
        tipo:'texto'
    },
    {
        placeholder:'Editorial',
        nombre:'editorial',
        tipo:'texto'
    },
    {
        placeholder:'Uri relativo',
        nombre:'URI_relacionado',
        tipo:'texto'
    },
    {
        placeholder:'Contribuidor',
        nombre:'contribuyente',
        tipo:'texto'
    },
    {
        placeholder:'Especies',
        nombre:'especie',
        tipo:'texto'
    },
    {
        placeholder:'Tesauro',
        nombre:'tesauro',
        tipo:'texto'
    },
    {
        placeholder:'Codigo pais',
        nombre:'codigos_de_pais',
        tipo:'texto'
    },
    {
        placeholder:'Identificador uri',
        nombre:'identificador_URI',
        tipo:'texto'
    },
    {
        placeholder:'Idioma',
        nombre:'idioma',
        tipo:'texto'
    },
    {
        placeholder:'Acceso a los derechos',
        nombre:'derechos_de_acceso',
        tipo:'texto'
    },
    {
        placeholder:'Publico destinatario',
        nombre:'audiencia_objetivo',
        tipo:'texto'
    }
]

export interface InputData {
    author: string;
    Abstract: string;
    refeered: string;
    other: string;
    accesioned: string;
    doi: string;
    document: string;
    statement: string;
    editor: string;
    keywords: string;
    status: string;
    coverage_place: string;
    date_avalaible: string;
    main_title: string;
    collection: string;
    edition: string;
    corporauthor: string;
    contents: string;
    classification: string;
    coverage_country: string;
    date_publication: string;
    alternative_title: string;
    publisher: string;
    relation_uri: string;
    contributor: string;
    species: string;
    thesaurus: string;
    countrycodes: string;
    identifier_uri: string;
    language: string;
    rights_acces: string;
    target_audience: string;
  }
  

