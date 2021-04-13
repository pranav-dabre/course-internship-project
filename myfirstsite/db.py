
import pymongo
from bson import ObjectId
"""========================================================="""
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["database"]
mycol=mydb["userdata"]

cartdata=myclient["cartdata"]
sitedata=myclient["sitedata"]
"""========================================================="""

def writeDB(obj,loc):
    col=mydb[loc]
    col.insert_one(obj)



def readsitedata(loc,opt): 
    coll=sitedata[loc]
    if opt=='zzz':            #------IMP option ZZZ
        k=[]
        for i in coll.find():
            del(i['_id'])
            k.append(i)
        return k
    else:
        pdt=coll.find_one({"id":opt})
        del(pdt["_id"])
        return pdt



def find_user(userobj):
    customer = mycol.find_one(userobj)
    if customer == None :
        return False
    elif userobj["email"] == customer["email"] and userobj["pswd"] == customer["pswd"]: #this line is not neccessary but it cross-checks
        return True
    
    else:
        return False

def already_user(useremail):
    if mycol.find_one({'email':useremail})== None: return False
    else: return True

            
"""------------------------------------------------- """
def addtocart(obj): #obj has email and product ID, get it from sitedata and paste it in cartdata
    if obj["email"] in cartdata.list_collection_names(): #beautifully written
        real_add_to_cart(obj)
    else: 
        cartdata.create_collection(obj["email"])
        real_add_to_cart(obj)

def real_add_to_cart(obj):
    usercart=cartdata[obj["email"]]
    g=obj["pdtId"][:1]
    if g=='m':c=sitedata["men"]
    elif g=='w':c=sitedata["women"]
    product=c.find_one({"id":obj["pdtId"]})
    del(product["_id"])
    usercart.insert_one(product)
"""-----------------------------------------------------"""
def readcart(obj):
    usercart=cartdata[obj["email"]]
    k=[]
    for i in usercart.find():
        del(i['_id'])
        k.append(i)
    return k
    
def remfromcart(obj):#remove from cart
    usercart=cartdata[obj["email"]]
    if obj["pdtId"]=="zzz":
        cartdata.drop_collection(obj["email"])
    else:
        usercart.delete_one({"id":obj["pdtId"]})
    return


""" front end given cart schema
{
    "email":"xyz@abc.com",
    "pdtId":""

}

in product we can also add a link to the product

"""

def profile_give(obj):
    user=mycol.find_one({"email":obj["email"]})
    del(user["_id"])
    del(user["pswd"])
    return user

    







