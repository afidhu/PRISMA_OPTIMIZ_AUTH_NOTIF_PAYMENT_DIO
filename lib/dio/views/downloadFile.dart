import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../controller/uploadDownloadController.dart';

class DownLoadFile extends StatefulWidget {
  const DownLoadFile({super.key});

  @override
  State<DownLoadFile> createState() => _DownLoadFileState();
}

class _DownLoadFileState extends State<DownLoadFile> {
  UploadDownLoadController uploadController = Get.put(UploadDownLoadController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('_DownLoadFile'),
      ),
      body: Center(
        child: Column(
          children: [
            OutlinedButton(
                style: ButtonStyle(
                    backgroundColor: WidgetStatePropertyAll(Colors.amberAccent)
                ),
                onPressed: uploadController.downLoadFile,
                child: Icon(Icons.download)
            )
          ],
        ),
      ),
    );
  }
}
