import 'dart:async';

import 'package:get/get.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:get_storage/get_storage.dart';

import '../home.dart';

class TokenService extends GetxService {
  final storage = GetStorage();

  void startTokenMonitor() {
    // Check every second or adjust interval
    Timer.periodic(Duration(seconds: 1), (timer) {
      final token = storage.read('token');
      if (token == null) return;

      if (JwtDecoder.isExpired(token)) {
        timer.cancel(); // stop monitoring once expired
        Get.snackbar('Token Expired', 'Please logout');
        // Optional: clear token and
        print('Token expired');
        storage.remove('token');
        // storage.remove('user');
        Get.offAll(()=>NotificationService());
      }
      else{
        print('Token still valid');
        // Get.to(()=>NotificationService());
      }
    });
  }
}
