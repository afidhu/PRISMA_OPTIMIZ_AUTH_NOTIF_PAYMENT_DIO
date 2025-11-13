
import 'package:dio/dio.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:flutter/material.dart';

final options = BaseOptions(
    baseUrl: 'http://192.168.1.133:5000',
    connectTimeout: Duration(seconds: 5),
    receiveTimeout: Duration(seconds: 3),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
);

final dioClient = Dio(options);

class StripeController extends GetxController{




  Future<void> initPaymentSheet() async {
    try {

      Future.delayed(Duration(seconds: 5));
      final response = await dioClient.post('/payment');
      final data = await response.data;

      // DioClient dioClient = Get.find<DioClient>();
      // Response response = await dioClient.insertWithBody('shop/payment-sheet', {});
      // final data = await response.data;

      final paymentIntent = data['paymentIntent'];
      final ephemeralKey = data['ephemeralKey'];
      final customer = data['customer'];
      final publishableKey = data['publishableKey'];


      Stripe.publishableKey = publishableKey;
      BillingDetails billingDetails =  BillingDetails(
        address: Address(
          country: 'TZ',
          // city: '${Get.find<LoginController>().myShop.district}',
          city: 'Tanzania',
          line1: 'addr1',
          line2: 'addr2',
          postalCode: '680681',
          state: 'kerala',
          // Other address details
        ),
        // Other billing details
      );
      await Stripe.instance.initPaymentSheet(
        paymentSheetParameters: SetupPaymentSheetParameters(
          customFlow: false,
          appearance: PaymentSheetAppearance(
            colors: PaymentSheetAppearanceColors(background: Colors.white38),
            shapes: PaymentSheetShape(
             borderRadius: 25,

            )
          ),
          merchantDisplayName: 'AFIDHU DEVELOPER',
          paymentIntentClientSecret: paymentIntent,
          customerEphemeralKeySecret: ephemeralKey,
          customerId: customer,
          style: ThemeMode.light,
          billingDetails: billingDetails,
          googlePay: const PaymentSheetGooglePay(
            merchantCountryCode: 'US',
            currencyCode: 'usd',
            testEnv: true,
          ),
        ),
      );

      await Stripe.instance.presentPaymentSheet().then((value) {
        print('success');
      }).onError((error, stackTrace) {

        if (error is StripeException) {
          print(error.error.localizedMessage);
          ScaffoldMessenger.of(Get.context!).showSnackBar(
            SnackBar(content: Text('${error.error.localizedMessage}')),
          );
        } else {
          print(error);
          ScaffoldMessenger.of(Get.context!).showSnackBar(
            SnackBar(content: Text('Stripe Error: $error')),
          );
        }
      });
    } catch (e) {
      print(e);
      ScaffoldMessenger.of(Get.context!).showSnackBar(
        SnackBar(content: Text('Error initializing payment: $e')),
      );
      ScaffoldMessenger.of(Get.context!).showSnackBar(
        SnackBar(content: Text(e.toString())),
      );
    }
  }



}