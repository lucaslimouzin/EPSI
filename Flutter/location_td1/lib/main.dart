import 'package:flutter/material.dart';
import 'package:location_td1/models/habitation.dart';
import 'package:location_td1/models/typeHabitat.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Locations',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Mes locations'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  final String title;
  MyHomePage({required this.title, Key? key}) : super(key: key);

  var _typehabitats = [TypeHabitat(1, "Maison"), TypeHabitat(2, "Appartement")];
  var _habitations = [
    Habitation(1, "maison.png", "Maison méditerranéenne",
     "12 Rue du Coq qui chante", 3,92, 630),
    Habitation(2, "appartement.png", "Appartement neuf",
     "Rue de la soif", 1,50, 555),
    Habitation(3, "appartement.png", "Appartement 1",
     "Rue 1", 1,52, 401),
    Habitation(4, "appartement.png", "Appartement 2",
     "Rue 2", 1, 53, 403),
    Habitation(5, "maison.png", "Maison 1",
     "Rue M1", 3,42, 830),
    Habitation(6, "maison.png", "Maison 2",
     "Rue M2", 3,102, 736),

  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Column(
          children: [
            _buildTypeHabitat(),
            _buildDerniereLocation(context),
          ]
        ),
      ),
    );
  }


  _buildTypeHabitat(){
    return Container(
      height: 100, 
      child: Row(
        children: List.generate(
            _typehabitats.length,
            (index) => _buildHabitat(_typehabitats[index]),
          ),
      ),
    );
  }

  _buildHabitat(TypeHabitat typeHabitat){
    var icon = Icons.house;
    switch (typeHabitat.id){
      //case 1: House
      case 2: 
        icon = Icons.apartment;
        break;
      default:
        icon = Icons.home;
    }
    return Container(
      height: 80,
      child: Row(
        children: [Icon(icon), Text(typeHabitat.libelle)],
      ),
    );
  }

  _buildDerniereLocation(BuildContext context) {
    return Container(
      height: 240,
      child: ListView.builder(
        itemCount: _habitations.length,
        itemExtent: 220,
        itemBuilder: (context, index) =>
          _buildRow(_habitations[index], context),
        scrollDirection: Axis.horizontal,
      ),
    );
  }

  _buildRow(Habitation habitation, BuildContext context) {
    return Container(
      width: 240,
      child: Column(
        children: [
          Image.asset(
            'assets/images/locations/${habitation.image}',
            fit: BoxFit.fitWidth,
          ),
          Text(habitation.libelle),
          Row(
            children: [
              Icon(Icons.location_on_outlined),
              Text(habitation.adresse),
            ],
          ),
          Text(habitation.prixmois.toString()),
        ],
      ),
    );
  }
}