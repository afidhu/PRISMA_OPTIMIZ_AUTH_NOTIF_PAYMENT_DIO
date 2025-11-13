import 'package:flutter/material.dart';

class TutorialLists extends StatefulWidget {
  const TutorialLists({super.key});

  @override
  State<TutorialLists> createState() => _TutorialListsState();
}

class _TutorialListsState extends State<TutorialLists> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tutorial Lis'),
      ),
      body: Center(
        child: Column(
          children: [
            MaterialButton(
              color: Colors.amber,
                onPressed: (){},
              child: Text('dependencies'),
            )
          ],
        ),
      ),
    );
  }
}
