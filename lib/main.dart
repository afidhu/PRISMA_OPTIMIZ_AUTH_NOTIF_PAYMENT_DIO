import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:get/get_state_manager/src/rx_flutter/rx_disposable.dart';
import 'package:get_storage/get_storage.dart';
import 'package:prisma_auth/stripe_payments/stripe_pay_controller.dart';
import 'package:prisma_auth/tutorials/tutoriaList.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'controller/Getx_service.dart';
import 'home.dart';

void main() async {
  // await GetStorage.init();
  Get.put(()=>StripeController());
  // await Get.find<StripeController>().initPaymentSheet();
  runApp(const MyApp());
  // Get.put(TokenService()).startTokenMonitor();

}



class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'OneSignal Example',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const NotificationService(),
      // home: TutorialLists(),
    );
  }
}
