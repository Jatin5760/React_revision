/*
  Asynchronous programming
  Allows us to write the program in which the tasks are no longer solved
  one after the other and instead solved in parallel.

  While one task is being processed, processes are already running on another task.

  Also, some tasks take more time - with async we can wait for them to finish.
 */

// async/await - wait for an event to occur in a thread/execution thread.

void main() async {
  DataService dataService = DataService();
  String data = await dataService.getData();
  print(data);
}

class DataService {
  Future<String> _getDataFromCloud() async {
    // get data from the cloud -> time
    await Future.delayed(Duration(seconds: 4));
    print("Get data finished");
    return "Fake Data";
  }

  Future<String> _parseDataFromCloud({required String dataFromCloud}) async {
    // get data from the cloud -> time
    await Future.delayed(Duration(seconds: 2));
    print("Parsed data finished");
    return "Parsed Data";
  }

  Future getData() async {
    // final String dataFromCloud = await _getDataFromCloud();
    // final String parseData = await _parseDataFromCloud(
    //   dataFromCloud: dataFromCloud,
    // );

    // Alternative Syntax
    final String parsedData = await _getDataFromCloud().then((dataFromCloud) async {
      return await _parseDataFromCloud(dataFromCloud: dataFromCloud);
    });

    return parsedData;

    // get data -> time
    // parse data -> time
    // return data;
  }
}
