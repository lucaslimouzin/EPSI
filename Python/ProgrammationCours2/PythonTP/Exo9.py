coteA = int(input("Côté A ? "))
coteB = int(input("Côté B ? "))
coteC = int(input("Côté C ? "))

coteA = coteA * coteA
coteB = coteB * coteB
coteC = coteC * coteC

if (coteC == coteA + coteB):
    print("Triangle rectange")
else:
    print("Triangle pas rectangle")

