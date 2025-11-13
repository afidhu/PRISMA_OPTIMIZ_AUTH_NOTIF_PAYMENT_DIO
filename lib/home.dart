import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:prisma_auth/stripe_payments/stripe_pay_screen.dart';

import 'controller/authController.dart';
import 'dio/dio_screen.dart';
import 'login.dart';
class NotificationService extends StatefulWidget {
  const NotificationService({super.key});

  @override
  State<NotificationService> createState() => _NotificationServiceState();
}

class _NotificationServiceState extends State<NotificationService> {



  @override
  void initState() {
    super.initState();
    initPlatformState();
    checkSubscriptionStatus();
  }

  Future<bool> checkSubscriptionStatus() async {
    await Future.delayed(Duration(seconds: 3));
    // Get the current subscription status
    final isSubscribed = OneSignal.User.pushSubscription.optedIn;
    print("isSubscribed: $isSubscribed");

    var playerId = OneSignal.User.pushSubscription.id;

    print("playerId: $playerId"); //THIS IS USED FOR APP SEND NOTIFICATION

    // Check if the user is subscribed
    if (isSubscribed != null && isSubscribed) {
      print("User is_subscribed");
      return true; // User is subscribed
    } else {
      print("User is not_subscribed");
      return false; // User is not subscribed
    }
  }

  Future<void> initPlatformState() async {
    // Set your OneSignal App ID here

    // ✅ Ensure Flutter engine bindings are initialized
    WidgetsFlutterBinding.ensureInitialized();

    // ✅ Enable verbose logging for debugging (remove in production)
    OneSignal.Debug.setLogLevel(OSLogLevel.verbose);

    // ✅ Initialize with your OneSignal App ID
    OneSignal.initialize("bc7ed886-b96c-44f1-a003-255e1e21a974");

    // ✅ Request notification permission (especially for iOS)
    OneSignal.Notifications.requestPermission(true);

    OneSignal.Notifications.addPermissionObserver((state) {
      print("Has_permission " + state.toString());
    });

    // Get device state
    final deviceState = await OneSignal.User.getOnesignalId();
    debugPrint("Device_ID: $deviceState");


  }

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: Text('OneSignal && AUTH, DIO'),
        centerTitle: true,
      ),
      body: Container(
        child: ListView(
          children: [
            Center(child: Text("OneSignal Example")),
            SizedBox(height: 20,),
            
            FilledButton(
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.cyan)
              ),
                onPressed: (){
                Get.to(()=>LoginScreen());
                },
                child:Icon(Icons.login)
            ),
            SizedBox(height: 10,)
            ,FilledButton(
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.amberAccent)
              ),
                onPressed: (){
                Get.to(()=>DioScreen());
                },
                child:Text('Go to Dio ')
            ),

            SizedBox(height: 20,),
            FilledButton(
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.purple)
              ),
                onPressed: (){
                Get.to(()=>StripePayScreen());
                },
                child:Text('Go Payment ')
            )
          ],
        ),
      )
    );
  }
}
