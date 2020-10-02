package Utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

import org.testng.Reporter;

public class RunApp {
	static Process p;
	
	
//	public static void main(String args[]) {
//		
//	}
	public void runApp() throws IOException, InterruptedException {
		Boolean isWindows = System.getProperty("os.name").toLowerCase().startsWith("windows");
		String filepath = System.getProperty("user.dir") + File.separator + "RunApp";
		
		ProcessBuilder builder = new ProcessBuilder();
		if(isWindows) {
			builder.command("cmd", "/c", "AppExecution.bat");
		}
		else {
			builder.command("sh", "-c", "AppExecution.sh");
		}
		builder = builder.directory(new File(filepath));
		p = builder.start();
		BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));
		String line = "";
		while ((line = reader.readLine()) != null) {
			System.out.println(line);
			if (line.contains("Server running")) {
				reader.close();
				break;
			}
		}
		Reporter.log("Server is up and running" , true);

	}
	
	public void closeApp() {
		p.destroyForcibly();
		Reporter.log("App is closed" , true);
	}

}
