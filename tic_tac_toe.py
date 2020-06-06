from numpy import array
import os
def board(a):

    print('   {}  |   {}  |   {}  '.format(a[0],a[1],a[2]))
    print('______|______|______')
    print('      |      |      ')
    print('   {}  |   {}  |   {}  '.format(a[3],a[4],a[5]))
    print('______|______|______')
    print('      |      |      ')
    print('   {}  |   {}  |   {}  '.format(a[6],a[7],a[8]))


flag=True
turn=0
a=array(['-','-','-','-','-','-','-','-','-'])

player1=input('palyer1 enter your name :- ')
player2=input('player2 enter your name :- ')
print(player1,' = "X"')
print(player2,' = "O"')

board(a)
while (flag==True and turn<9):
    if a[0]==a[1]==a[2]=='X'or a[0]==a[1]==a[2]=='O':
        flag=False
        break
    elif a[3]==a[4]==a[5]=='X'or a[3]==a[4]==a[5]=='O':
        flag==False
        break
    elif a[6]==a[7]==a[8]=='X'or a[6]==a[7]==a[8]=='O':
        flag==False
        break
    elif a[0]==a[4]==a[8]=='X'or a[0]==a[4]==a[8]=='O':
        flag==False
        break
    elif a[2]==a[4]==a[6]=='X'or a[2]==a[4]==a[6]=='O':
        flag==False
        break
    elif a[0]==a[3]==a[6]=='X'or a[0]==a[3]==a[6]=='O':
        flag==False
        break
    elif a[1]==a[4]==a[7]=='X'or a[1]==a[4]==a[7]=='O':
        flag==False
        break
    elif a[2]==a[5]==a[8]=='X'or a[2]==a[5]==a[8]=='O':
        flag==False
        break
    else:
        if turn%2==0:
            print(player1,'enter block number = ')
            p1=int(input())
            a[p1]='X'
            os.system('cls')
            board(a)
        else:
            print(player2,'enter block number = ')
            p2=int(input())
            a[p2]='O'
            os.system('cls')
            board(a)
        turn+=1

if ( flag==False and turn%2==0):
    print(player2,' wins')
elif(flag==False and turn%2!=0):
    print(player1,' wins')
elif(turn==9):
    print('its a draw !!!')







