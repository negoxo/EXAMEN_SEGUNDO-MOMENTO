import pandas as pd

from data.generators.generadorCalidadAire import generadorCalidadAire

#para analizar datos con python debemos cosntruir un dataframe

def construirDataFrameCalidadAire():
    #traigo los datos generados en el mock
    datosCalidadAire=generadorCalidadAire()
    
    #cosntruyo el dataframe
    calidadAireDF=pd.DataFrame(datosCalidadAire, columns=['comuna', 'ttlpob', 'muestra', 'ICA', 'Fecha', 'Nombre', 'Id'])
    
    #probando
    print (calidadAireDF)
    
construirDataFrameCalidadAire()