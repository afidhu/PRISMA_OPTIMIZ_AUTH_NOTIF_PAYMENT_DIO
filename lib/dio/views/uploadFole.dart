import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../controller/uploadDownloadController.dart';

class UploadFile extends StatefulWidget {
  const UploadFile({super.key});

  @override
  State<UploadFile> createState() => _UploadFileState();
}

class _UploadFileState extends State<UploadFile> {
  UploadDownLoadController uploadController = Get.put(UploadDownLoadController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('UPLOADS'),
      ),
      body: Center(
        child: Column(
          children: [
            OutlinedButton(
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.redAccent)
              ),
                onPressed: uploadController.uploadFile,
                child: Icon(Icons.upload)
            )
          ],
        ),
      ),
    );
  }
}
