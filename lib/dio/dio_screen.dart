import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:prisma_auth/dio/views/downloadFile.dart';
import 'package:prisma_auth/dio/views/getData.dart';
import 'package:prisma_auth/dio/views/uploadFole.dart';

class DioScreen extends StatefulWidget {
  const DioScreen({super.key});

  @override
  State<DioScreen> createState() => _DioScreenState();
}

class _DioScreenState extends State<DioScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dio'),
        centerTitle: true,
        backgroundColor: Colors.blueAccent,
      ),
      body: Center(
        child: Column(
          children: [
            MaterialButton(

              color: Colors.blueAccent,
                onPressed: (){
                Get.to(()=>GetData());
                },
                child: Text('METHOD(get,post,put,delete)' )
            ),
            MaterialButton(
              color: Colors.blueAccent,
                onPressed: (){
                Get.to(()=>DownLoadFile());
                },
                child: Text('Download')
            ),MaterialButton(
              color: Colors.redAccent,
                onPressed: (){
                Get.to(()=>UploadFile());
                },
                child: Text('Upload')
            ),
          ],
        ),
      ),
    );
  }
}
