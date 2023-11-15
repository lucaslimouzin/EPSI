#fonction estPremier()
def estPremier(n):
    estPremier = 'True'
    for i in range(2,n) :
        if n % i == 0:
            estPremier = 'False'
    return estPremier

def nombresPremiers(n):
    for x in range (2, n+1):
        if(estPremier(x) == 'True'):
            print(x)

nombresPremiers(10)
