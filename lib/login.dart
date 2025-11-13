import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'controller/authController.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  AuthController authController = Get.put(AuthController());
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Login "),
        centerTitle: true,
      ),
      body:  Center(
        child: Column(
          children: [
            Text("Login Screen"),
            OutlinedButton(
                onPressed: authController.loginBottomSheet,
                child: Icon(Icons.run_circle)
            )
          ],
        )
      ),
    );
  }
}
