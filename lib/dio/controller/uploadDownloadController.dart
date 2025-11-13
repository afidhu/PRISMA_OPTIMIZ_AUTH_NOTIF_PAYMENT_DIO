import 'dart:convert';
import 'dart:io';
import 'package:path_provider/path_provider.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart' hide MultipartFile, FormData;
import 'package:prisma_auth/dio/dio_services/dio_service.dart';
import 'package:file_picker/file_picker.dart';
import 'package:dio/dio.dart';

import '../../model/post.dart';

class UploadDownLoadController extends GetxController {
  Future<void> downLoadFile() async {
    try {
      Directory directory = await getApplicationDocumentsDirectory();
      String savePath = '${directory.path}/files.pdf';
      Future.delayed(Duration(seconds: 3));
      var response = await dio.download(
        'https://www.tutorialspoint.com/flutter/flutter_tutorial.pdf',
        savePath,
      );
      debugPrint(response.toString());
      debugPrint('Download Complete, status ${response.statusCode} ');
      print(savePath);
    } catch (e) {
      debugPrint(e.toString());
    } finally {}
  }

  Future<void> uploadFile() async {
    try {
      FilePickerResult? result = await FilePicker.platform.pickFiles();

      if (result != null) {
        // Access the selected file(s)
        PlatformFile file = result.files.first; // For single file selection
        // Or iterate through result.files for multiple selections
        print('File name: ${file.name}');
        print('File path: ${file.path}');
        print('File size: ${file.size}');
        print('File extension: ${file.extension}');
        var time = DateTime.now();
        var filename = '${file.name}+${time.toIso8601String()}';
        var filePath = file.path;

        PostModel postsData = PostModel(
          title: 'ugali',
          category: '1',
          description: "well fine",
          image: MultipartFile.fromFile(filePath!, filename: filename).toString(),
        );
        final formData = FormData.fromMap(postsData.toJson());
        final response = await dio.post('/products', data: formData,
          onSendProgress: (int sent, int total) {
            print('progress status: $sent $total');
          },
        );

        print(response.data);
        print(response.statusCode);
        print(response.statusMessage);
        debugPrint(response.toString());

      } else {
        // User canceled the picker
      }
    } catch (e) {
      throw Exception(e);

      debugPrint(e.toString());
    } finally {}
  }
}
