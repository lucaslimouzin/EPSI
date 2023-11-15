#fonction estPremier()
def estPremier(n):
    estPremier = 'True'
    for i in range(2,n) :
        if n % i == 0:
            estPremier = 'False'
    return estPremier

print(estPremier(8))
