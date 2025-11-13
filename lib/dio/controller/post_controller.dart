
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../model/post.dart';
import '../dio_services/dio_service.dart';

class PostController extends GetxController {


  var posts =<PostModel>[].obs;
  Future<List<PostModel>> getData() async {
    try {
      var response = await dio.get('/products');
      print("statusCode: ${response.statusCode}");
      print("DataAre ${response.data.toString()}");
      List<dynamic> dataList =response.data;
      List<PostModel> postList = dataList.map((json) =>
          PostModel.fromJson(json)).toList();
      posts.assignAll(postList);
      return posts;
    } catch (e) {
      throw Exception("Error AT: $e");
    } finally {}
  }


  Future<dynamic> postData() async {
///i do by Multiple Request By one, ALSO CAN DO ONE PER EACH FUNCTION
    try{
      PostModel postObject =PostModel(
        title: "wali",
        category: '1',
        description:"wali wali",
        price: 20,
        image: null,
      );
      var response =await Future.wait([
      dio.post('/products',data: postObject.toJson()),
    dio.get('/products',),
      ]);
      print("statusCode: ${response[0].statusCode}");
      print("statusCode: ${response[1].statusCode}");
      print("statusCode: ${response[1].data}");
    }catch(e){
      throw Exception("Error AT: $e");
    } finally{}
  }

}