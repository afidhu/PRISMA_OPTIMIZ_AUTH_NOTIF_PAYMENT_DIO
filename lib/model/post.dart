class PostModel {
  int? id;
  String? title;
  double? price;
  String? description;
  String? category;
  String? image;
  Rating? rating;

  PostModel(
      {this.id,
        this.title,
        this.price,
        this.description,
        this.category,
        this.image,
        this.rating,
      });

  PostModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    title = json['title'];
    price = json['price'].toDouble();
    description = json['description'];
    category = json['category'];
    image = json['image'];
    rating =
    json['rating'] != null ? new Rating.fromJson(json['rating']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['title'] = this.title;
    data['price'] = this.price;
    data['description'] = this.description;
    data['category'] = this.category;
    data['image'] = this.image;
    final rating = this.rating;
    if (rating != null) {
      data['rating'] = rating.toJson();
    }
    return data;
  }
}

class Rating {
  double rate;
  int count;
  Rating({required this.rate, required this.count});
  Rating.fromJson(Map<String, dynamic> json)
      : rate = (json['rate'] as num).toDouble(),
        count = json['count'];

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['rate'] = this.rate;
    data['count'] = this.count;
    return data;
  }
}
