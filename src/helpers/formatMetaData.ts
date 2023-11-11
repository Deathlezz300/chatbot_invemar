export const ordenarLlegadaMetada=(data:any)=>{

    
    data.palabras_clave=data.palabras_clave ? data.palabras_clave.join(",") : "";
    data.especie=data.especie ? data.especie.join(",") : "";
    data.clasificacion=data.clasificacion ? data.clasificacion.join(",") : "";
    data.otro=data.otro ? data.otro.join(",") : "";
    data.lugar_de_cobertura=data.lugar_de_cobertura ? data.lugar_de_cobertura.join(",") : "";

    data.fecha_de_acceso=formatearFecha1(data.fecha_de_acceso);
    data.fecha_disponible=formatearFecha1(data.fecha_disponible);
    data.fecha_de_publicacion=formatearFecha1(data.fecha_de_publicacion);


    return data;

}

export const ordernarMetaDataSalida=(data:any)=>{

    data.fecha_de_acceso=formatearFecha2(data.fecha_de_acceso);
    data.fecha_disponible=formatearFecha2(data.fecha_disponible);
    data.fecha_de_publicacion=formatearFecha2(data.fecha_de_publicacion);

    return data;

}


export const formatearFecha1=(fechaPdf:string)=>{

    if(!fechaPdf) return "";

    const año = fechaPdf.substring(2, 6);
    const mes = fechaPdf.substring(6, 8);
    const día = fechaPdf.substring(8, 10);

  // Crear la cadena en el formato "YYYY-MM-DD"
    const fechaInputDate = `${año}-${mes}-${día}`;

    return fechaInputDate

}

export const formatearFecha2=(fechaFull:string)=>{

    const fecha=new Date(fechaFull);

    if(!fecha) return "";

    const año = fecha.getUTCFullYear();
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
    const día = fecha.getUTCDate().toString().padStart(2, "0");
    const hora = fecha.getUTCHours().toString().padStart(2, "0");
    const minutos = fecha.getUTCMinutes().toString().padStart(2, "0");
    const segundos = fecha.getUTCSeconds().toString().padStart(2, "0");

            // Crear la cadena en el formato "D:YYYYMMDDHHmmssZ"
    const fechaConvertida = `D:${año}${mes}${día}${hora}${minutos}${segundos}Z`;

    return fechaConvertida

}