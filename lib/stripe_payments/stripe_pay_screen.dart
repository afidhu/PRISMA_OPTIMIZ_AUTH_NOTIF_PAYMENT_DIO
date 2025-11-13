import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:prisma_auth/stripe_payments/stripe_pay_controller.dart';

class StripePayScreen extends StatefulWidget {
  const StripePayScreen({super.key});

  @override
  State<StripePayScreen> createState() => _StripePayScreenState();
}

class _StripePayScreenState extends State<StripePayScreen> {

  StripeController stripeController = Get.put(StripeController());




  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Stripe Pay'),
      centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Card(
              child:Container(),
            ),

            ElevatedButton(
                onPressed: stripeController.initPaymentSheet,
                child: Text('Checkout')
            )
          ],
        ),
      ),
    );
  }
}
