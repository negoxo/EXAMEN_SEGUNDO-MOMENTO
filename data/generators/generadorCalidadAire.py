#Rutina para generar de forma aleatoria con MULTIPLES DATOS PYTHON

import random

def generadorCalidadAire():
    listaDatos = []
    for i in range(1000):
        comuna=random.choice(['comuna1 popular', 'comuna12 La America', 'comuna13 SanJavier', 'comuna16 belen'])
        totalPoblacion=random.choice(['300', '200', '200','200'])
        tamanoMuestra=random.choice(['100', '100', '100','100'])
        ica=random.randint(20,100)
        fechaEncuesta=random.choice(['2024-04-25','2024-05-10'])
        nombreEncuestador=random.choice(['Juan','Roberto','Valentina','Maria','Jose', 'Hector'])
        id=random.randint(0,10000)
        calidadAire=[comuna,totalPoblacion,tamanoMuestra,ica,fechaEncuesta,nombreEncuestador,id]
        
        listaDatos.append(calidadAire)
        
    return listaDatos
#print (generadorCalidadAire())