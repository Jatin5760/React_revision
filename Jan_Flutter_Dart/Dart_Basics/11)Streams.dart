// Streams

/*
  Future represent a value that they deliver asynchronously.

  Streams are similar but instead of a single value they can return zero or more values or errors over time.
  
 */

import 'dart:async';

void main(List<String> args) {
  final numberGenerator = NumberGenerator();

  StreamSubscription sub1 = numberGenerator.stream.listen((event){
    print('sub1: $event');
  });

  StreamSubscription sub2 = numberGenerator.stream.listen((event){
    print('sub2: ${event * event}');
  });
  // working with streams
}

class NumberGenerator {
  int _counter = 0;

  StreamController<int> _controller = StreamController<int>.broadcast();

  Stream<int> get stream => _controller.stream;

  NumberGenerator() {
    final Timer timer = Timer.periodic(Duration(seconds: 1), (timer) {
      // sends a event over the stream every second.
      _controller.add(_counter);
      _counter++;
    });

    Future.delayed(Duration(seconds: 10), () {
      // closes the stream and timer after 10 sec.
      timer.cancel();
      _controller.close();
    });
  }
}
