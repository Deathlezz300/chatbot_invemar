import { InputI } from '../interfaces/ChatInterfaces';


export const DataInputs:InputI[]=
[
    {
        placeholder:'Autor',
        nombre:'author'
    },
    {
        placeholder:'Abstract',
        nombre:'Abstract'
    },
    {
        placeholder:'Refeered',
        nombre:'refeered'
    },
    {
        placeholder:'Otros',
        nombre:'other'
    },
    {
        placeholder:'Accedido',
        nombre:'accesioned'
    },
    {
        placeholder:'DOI',
        nombre:'doi'
    },
    {
        placeholder:'Tipo documento',
        nombre:'document'
    },
    {
        placeholder:'Declaración',
        nombre:'statement'
    },
    {
        placeholder:'Editor',
        nombre:'editor'
    },
    {
        placeholder:'Palabras claves',
        nombre:'keywords'
    },
    {
        placeholder:'Estado',
        nombre:'status'
    },
    {
        placeholder:'Lugar cobertura',
        nombre:'coverage_place'
    },
    {
        placeholder:'Fecha disponible',
        nombre:'date_avalaible'
    },
    {
        placeholder:'Titulo principal',
        nombre:'main_title'
    },
    {
        placeholder:'Tipo colección',
        nombre:'collection'
    },
    {
        placeholder:'Edición',
        nombre:'edition'
    },
    {
        placeholder:'Corporautor',
        nombre:'corporauthor'
    },
    {
        placeholder:'Contenido',
        nombre:'contents'
    },
    {
        placeholder:'Clasificación',
        nombre:'classification'
    },
    {
        placeholder:'Pais cobertura',
        nombre:'coverage_country'
    },
    {
        placeholder:'Fecha publicación',
        nombre:'date_publication'
    },
    {
        placeholder:'Titulo alternativo',
        nombre:'alternative_title'
    },
    {
        placeholder:'Editorial',
        nombre:'publisher'
    },
    {
        placeholder:'Uri relativo',
        nombre:'relation_uri'
    },
    {
        placeholder:'Contribuidor',
        nombre:'contributor'
    },
    {
        placeholder:'Especies',
        nombre:'species'
    },
    {
        placeholder:'Tesauro',
        nombre:'thesaurus'
    },
    {
        placeholder:'Codigo pais',
        nombre:'countrycodes'
    },
    {
        placeholder:'Identificador uri',
        nombre:'identifier_uri'
    },
    {
        placeholder:'Idioma',
        nombre:'language'
    },
    {
        placeholder:'Acceso a los derechos',
        nombre:'rights_acces'
    },
    {
        placeholder:'Publico destinatario',
        nombre:'target_audience'
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
  

