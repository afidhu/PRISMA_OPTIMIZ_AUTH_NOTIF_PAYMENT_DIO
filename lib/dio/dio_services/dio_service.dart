import 'package:dio/dio.dart';


// final dio = Dio(BaseOptions(
//   baseUrl: 'https://jsonplaceholder.typicode.com',
//   connectTimeout: Duration(seconds: 5),
//   receiveTimeout: Duration(seconds: 3),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// ));
//
//
//
//   // /// Sets the Authorization token dynamically
//   void setAuthToken(String token) {
//     dio.options.headers['Authorization'] = 'Bearer $token';
//     print('🔑 Token set: $token');
//   }
//
// /// Clears the Authorization header
// void clearAuthToken() {
//   dio.options.headers.remove('Authorization');
//   print('🚫 Token cleared');
// }
// }



// final dio = Dio(BaseOptions(
//   baseUrl: 'https://jsonplaceholder.typicode.com',
//   connectTimeout: Duration(seconds: 5),
//   receiveTimeout: Duration(seconds: 3),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// ));
// void configureDio() {
//   // Add interceptors if needed (logging, auth, etc.)
//   dio.interceptors.add(
//     InterceptorsWrapper(
//       onRequest: (options, handler) {
//         print("➡️ Request: ${options.method} ${options.path}");
//         return handler.next(options);
//       },
//       onResponse: (response, handler) {
//         print("✅ Response: ${response.statusCode}");
//         return handler.next(response);
//       },
//       onError: (DioException e, handler) {
//         print("❌ Error: ${e.response?.statusCode} ${e.message}");
//         return handler.next(e);
//       },
//     ),
//   );
// }

//



  final options = BaseOptions(
    // baseUrl: 'https://fakestoreapi.com',
    baseUrl: 'http://192.168.1.133:5000',
    connectTimeout: Duration(seconds: 5),
    receiveTimeout: Duration(seconds: 3),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  );

  final dio = Dio(options);


    //||====>>IF AUTH TOKEN IS NEEDED|||||
    // /// Sets the Authorization token dynamically
  // void setAuthToken(String token) {
  //   dio.options.headers['Authorization'] = 'Bearer $token';
  //   print('🔑 Token set: $token');
  // }

/// Clears the Authorization header
void clearAuthToken() {
  dio.options.headers.remove('Authorization');
  print('🚫 Token cleared');
}