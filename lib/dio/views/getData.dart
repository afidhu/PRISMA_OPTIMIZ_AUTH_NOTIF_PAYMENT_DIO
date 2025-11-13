
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:prisma_auth/dio/dio_services/dio_service.dart';

import '../../model/post.dart';
import '../controller/post_controller.dart';
class GetData extends StatefulWidget {
  const GetData({super.key});

  @override
  State<GetData> createState() => _GetDataState();
}

class _GetDataState extends State<GetData> {
  PostController postController = Get.put(PostController());

  @override

  
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        child: FutureBuilder(
          future:postController. getData(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(child: CircularProgressIndicator());
            }
            else if(snapshot.hasData){
              return Obx(()=> ListView.builder(
                itemCount: postController.posts.length,
                itemBuilder: (context, index) {
                  var data = postController.posts[index];
                return  ListTile(leading: Icon(Icons.list), title: Text(data.title.toString()),);

                },
              ));

            }  else if(snapshot.hasError){
              debugPrint(snapshot.error.toString());
              return  Center(child: Text("Error: ${snapshot.error}"),);

            }

            else{
              return const Center(child: Text("No data"),);
            }
          }
      )
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: postController.postData,
          child: Icon(Icons.add)
      ),
    );
  }
}
