import java.util.Scanner;  // Import the Scanner class
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.io.*;

class FileOps {
  public static void main(String[] args) {
    Scanner myScanner = new Scanner(System.in);  // Create a Scanner object
    System.out.println("Hello World!");
    LocalDateTime localTime = LocalDateTime.now();
    DateTimeFormatter myFormmater = DateTimeFormatter.ofPattern("E, MMM dd yyyy");
    System.out.println("Today is :"+localTime.format(myFormmater));

    File myFile = new File("text.txt");
   
    if(!myFile.exists()){
      try{
        if(myFile.createNewFile()){
          System.out.println("File create succeed!");
        }
        else{
          System.out.println("File careat failed!");
          return;
        }
      }catch(IOException e){
        System.out.println("An error occured when creating file!");
        e.printStackTrace();
        return;
      }
    }
    else{
      System.out.println("File already exists!");
    }

    try{
      FileWriter myWriter = new FileWriter(myFile,true);
      // myWriter.write("This is my first file created by java!");
      System.out.println("Append something to the file:");
      myWriter.write(myScanner.nextLine()+"\n");
      myWriter.close();
      System.out.println("Succeed in writing file!");
    }catch(IOException e){
      System.out.println("An error occured when writing file!");
      e.printStackTrace();
      return;
    }

    try{
      Scanner myReader = new Scanner(myFile);
      while(myReader.hasNextLine()){
        System.out.println(myReader.nextLine());
      }
      System.out.println("Succeed in reading file!");
      myReader.close();
    }catch(IOException e){
      System.out.println("An error occured when writing file!");
      e.printStackTrace();
      return;
    }

    System.out.println("Do you want to delete the file?(Y/N)");
    char isDelete = myScanner.nextLine().charAt(0);
    if(isDelete == 'y' | isDelete == 'Y'){
      if(myFile.delete()){
        System.out.println("File delete succeed!");
      } else{
        System.out.println("file delete failed!");
      }    
    }
    }

}