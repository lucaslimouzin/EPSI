nbNotes = int(input("Nombre de notes ? "))
result =0
for x in range(nbNotes):
    note = int(input("entrez une note : "))
    result = result + note
result = result / nbNotes
print(result)