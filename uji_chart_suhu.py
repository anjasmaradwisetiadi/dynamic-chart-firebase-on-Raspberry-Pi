import Adafruit_DHT
import sys
import pyrebase
import RPi.GPIO as GPIO
import time
import schedule

config = {
  "apiKey": " ",
  "authDomain": " ",
  "databaseURL": " ",
  "storageBucket": " "
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()

#  setup pin on raspberry
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(22,GPIO.OUT)

S1=0

	
def job(humidity_1, temperature_1):
	
	
	global S1		
	print ("temperature sekarang = {}".format(temperature_1))
	print ("humidty sekarang = {} ".format(humidity_1))
		
	S1=S1+1
		
	print("{}".format(S1))
	if S1==1:
		print"\n tarikan pertama "
		 
		db.child("data/1").update({
		"value":"{}".format(temperature_1)
			})
		
	elif S1==2:
		print"\n tarikan kedua "
		db.child("data/2").update({
		"value":"{}".format(temperature_1)
		})

	elif S1==3:
		print"\n tarikan ketiga "
		db.child("data/3").update({
		"value":"{}".format(temperature_1)			
			})
			
	elif S1==4:
		print"\n tarikan keempat "
		db.child("data/4").update({
		"value":"{}".format(temperature_1)		
			})
			
	elif S1==5:
		print"\n tarikan kelima "
		db.child("data/5").update({
		"value":"{}".format(temperature_1)	
		})		
	else:
			S1=0
			
	time.sleep(1)	
	schedule.clear()		

#class temperture for use DHT11
class suhu:

	def __init__(self, humidity, temperature):
		self.humidity_1 = humidity
		self.temperature_1 = temperature	
		#melakukan update nilai temperature dan kelembaban
		db.child("suhu").update({
		"temperature": " {}".format(self.temperature_1),
		"humidty": "{} ".format(self.humidity_1)
		})
		
		
		schedule.every(5).seconds.do(job, temperature, humidity)
		print ('Temp: {} C  Humidity: {}'.format(self.temperature_1, self.humidity_1))		
#main program				
while True:
	DHT_11= True
	if DHT_11:
		humidity, temperature = Adafruit_DHT.read_retry(11, 4) #masuk board pin 7
		suhu(humidity,temperature)
		schedule.run_pending()
		time.sleep(1)
		
	
GPIO.cleanup()
	

	
	
		
		
			
	