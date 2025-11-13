import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:prisma_auth/dio/dio_services/dio_service.dart';


class AuthController extends GetxController {

  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
  }

  final formKey = GlobalKey<FormState>();
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  Future<void> loginBottomSheet()async{
    Get.bottomSheet(
      Container(
        color: Colors.white,
        height: Get.height * 0.4,

        child: Column(
          children: [
            Form(
              key: formKey,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                child:
                Column(
                  children: [
                    TextFormField(

                      validator: (val){
                        if(val!.isEmpty || !GetUtils.isEmail(val)){
                          return 'Invalid Email';
                        }
                        return null;
                      },
                      controller: emailController,
                      decoration: InputDecoration(
                        hintText: 'Email',
                        prefixIcon: Icon
                        (
                          Icons.email,
                          color: Colors.grey,
                        )
                      )


                    ),
                    TextFormField(
                        validator: (val){
                          if(val!.isEmpty || val.length < 6){
                            return 'Invalid password';
                          }
                          return null;
                        },
                        controller: passwordController,
                        obscureText: true,
                        decoration: InputDecoration(
                            hintText: 'password',
                            prefixIcon: Icon
                              (
                              Icons.password,
                              color: Colors.grey,
                            )
                        )


                    )
                  ],
                )
            ),
            MaterialButton(
              color: Colors.blue,
                child: Text('Login'),
                onPressed: (){
                  if(formKey.currentState!.validate()){
                    userLogin();
                    Get.back();
                  }else{
                    print('invalid');
                  }

                }
            )
          ],
        ),
      )
    );
  }

  final tokenStorage = GetStorage();
  Future<void>userLogin() async{
   try{
     var payload = {
       'email': emailController.text,
       'password': passwordController.text
     };
     var response = await dio.post('/auth2/login', data: payload);
     if(response.data !=null){
       tokenStorage.write('token', response.data['token']);
     print('DataAre : ${response.data}');
     print('TokenAre : ${response.data['token']}');

     ///Pass in header
     dio.options.headers['Authorization'] = 'Bearer ${response.data['token']}';
     var user = await dio.get('/auth2/verifyuser');
     print('UserAre : ${user.data}');

     }
   } catch(e){
     print(e);
     print('ErrorAt :${e.toString()}');
   } finally{}

  }


}