# import sqlite3

# # try:
	
# # 	# Connect to DB and create a cursor
# # 	sqliteConnection = sqlite3.connect('sql.db')
# # 	cursor = sqliteConnection.cursor()
# # 	print('DB Init')

# # 	# Write a query and execute it with cursor
# # 	query = 'select sqlite_version();'
# # 	cursor.execute(query)

# # 	# Fetch and output result
# # 	result = cursor.fetchall()
# # 	print('SQLite Version is {}'.format(result))

# # 	# Close the cursor
# # 	cursor.close()

# # # Handle errors
# # except sqlite3.Error as error:
# # 	print('Error occured - ', error)

# # # Close DB Connection irrespective of success
# # # or failure
# # finally:
	
# # 	if sqliteConnection:
# # 		sqliteConnection.close()
# # 		print('SQLite Connection closed')

# print(".................................................................................................")

# cnt = sqlite3.connect('gfg.db')

# cursor = cnt.cursor()

# # # Create a exam_hall relation
# # cursor.execute('''CREATE TABLE exam_hall3(
# # NAME TEXT,
# # PIN INTEGER,
# # OCCUPANCY REAL);''')


# # Insert tuples for the relation
# cursor.execute('''INSERT INTO exam_hall3 VALUES('centre-a', 1125, 98.6);''')
# # cnt.execute('''INSERT INTO exam_hall3 VALUES(NULL,1158,80.5);''')
# cnt.commit()

# cursor.close()

# print('DONE')

# # cursor = cnt.execute('''SELECT * FROM exam_hall;''')
# # for i in cursor:
# # 	print(str(i[0])+" "+str(i[1])+" "+str(i[2])+" ")
# # 	# print(str(type(i[0]))+" "+str(type(i[1]))+" " +
# # 	# 	str(type(i[2]))+" "+str(type(i[3]))+"\n")

# class Fun():
#     a=3
#     b="hello"

#     def h(self, inpp):
#         p = self.b
#         return p+inpp

# fun = Fun()
# print(fun.h("yyyyyy"))


a = {"a":1, "b":2}
keys = a.keys()
values = a.values()
print(a)
print(tuple(keys))
print(tuple(values))
# # b = "hello " + str(a) + " ;"
# # print(b)

# student_keys = "("
# for key in a:
#     student_keys += key + ", "
# student_keys = student_keys[0:len(student_keys)-2]
# student_keys += ")"
# print(student_keys)

# a = {"a":1,"b":2,"c":3}
# items = a.items()
# print(items)
# for item in items:
#     print(item[0])
#     print(item[1])