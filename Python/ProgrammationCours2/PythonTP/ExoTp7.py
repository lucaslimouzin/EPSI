import time
import re
import json
import os
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Création du répertoire 'data/' si inexistant
isExist = os.path.exists('data/')
if not isExist:
    os.makedirs('data/')

# Initialisation d'une liste qui contiendra les données JSON
json_data = []

# URL du site web à explorer
url = 'https://www.belex.sites.be.ch/app/fr/systematic/texts_of_law'

# Configuration des options du navigateur Chrome
chrome_options = Options()
chrome_options.add_argument("--start-maximized")
driver = webdriver.Chrome(options=chrome_options)

# Accès à l'URL
driver.get(url)
time.sleep(3)

# Cliquer sur certains éléments pour afficher les résultats
driver.find_element(By.XPATH, '//*[@id="page-content"]/ng-component/ng-component/clex-texts-of-law-filters/div/div/div/span').click()
time.sleep(1)
driver.find_element(By.XPATH, '//*[@id="page-content"]/ng-component/ng-component/clex-texts-of-law-filters/div/ul/a/div/label').click()
time.sleep(3)

# Liste pour stocker les liens des articles
links = []
articles = driver.find_elements(By.CLASS_NAME, "text-of-law-link")

# Récupérer les liens des articles
for article in articles:
    links.append(article.get_attribute('href'))

time.sleep(1)

# Itérer sur les trois premiers liens (i > 3)
i = 0
for link in links:
    i = i + 1
    if i > 3:
        break
    
    print()
    print("#", i)
    print(link)

    # Accéder à chaque lien
    driver.get(link)
    time.sleep(1)

    # Attendre que la page soit prête
    ready = False
    while not ready :
        try:
            driver.find_element(By.TAG_NAME, "h1")
            ready = True
        except NoSuchElementException:
            print("NOT READY YET")
            time.sleep(1)
            ready = False
    
    # Générer un identifiant unique pour chaque article (hash du lien)
    id = str(hash(link))[1:13]
    filepath = "data/" + id + ".txt"

    try :
        # Récupérer le numéro RS
        numero_rs = driver.find_element(By.CLASS_NAME, "systematic_number")
    except :
        print("PAS DE CONTENU TEXTUEL... NEXT")
        continue
    
    if numero_rs is not None:
        numero_rs = numero_rs.text
        print("NUMÉRO RS :", numero_rs)
    
    # Récupérer le nom
    nom = driver.find_element(By.CLASS_NAME, "title")
    if nom is not None:
        nom = nom.text.replace("\n", " ")
        print("NOM :", nom)
    
    # Récupérer l'abréviation
    abbreviation = driver.find_element(By.CLASS_NAME, "abbreviation")
    if abbreviation is not None:
        abbreviation = abbreviation.text
        print("ABRÉVIATION :", abbreviation)
    else:
        abbreviation = ""
    
    # Récupérer la provenance
    provenance = driver.find_element(By.CLASS_NAME, "ingress_author")
    if provenance is not None:
        provenance = provenance.text
        print("PROVENANCE :", provenance)
    else:
        provenance = ""
    
    # Récupérer le fondement
    fondement = driver.find_element(By.CLASS_NAME, "ingress_foundation")
    if fondement is not None:
        fondement = fondement.text
        print("FONDEMENT :", fondement)
    else:
        fondement = ""
    
    # Récupérer la date d'entrée en vigueur
    date_entree_en_vigueur = ""
    sous_titre = driver.find_element(By.XPATH, '//*[@id="page-content"]/ng-component/div[1]/div/clex-meta-info/p')
    if sous_titre is not None:
        sous_titre = sous_titre.text
        print("SOUS-TITRE :", sous_titre)
        regex = 'du (\d+[.]\d+[.]\d+)'
        date_entree_en_vigueur = re.search(regex, sous_titre)
        if date_entree_en_vigueur :
            date_entree_en_vigueur =  date_entree_en_vigueur[1]
            print("DATE D'ENTRÉE EN VIGUEUR : " + date_entree_en_vigueur)
        else :
            date_entree_en_vigueur = ""
    else:
        sous_titre = ""
    
    # Récupérer le contenu de l'article
    content = driver.find_element(By.CLASS_NAME, "document")
    if content is not None:
        content = content.text
        # print("CONTENT :", content)
        
        # Écrire le contenu dans un fichier
        open(filepath, 'w', encoding='utf-8', newline="").write(content)
    
    # Créer un objet JSON pour chaque article
    json_article = {
        "id" : id,
        "nom" : nom,
        "abreviation" : abbreviation,
        "url" : link,
        "numero_rs" : numero_rs,
        "provenance" : provenance,
        "fondement" : fondement,
        "date_entree_en_vigueur" : date_entree_en_vigueur,
        "file_path" : filepath
    }
    json_data.append(json_article)

# Écrire la liste des objets JSON dans un fichier JSON
open("data.json", "w", encoding='utf-8').write(json.dumps(json_data,
                                                          indent = 4,
                                                          sort_keys = False, 
                                                          ensure_ascii=False))
