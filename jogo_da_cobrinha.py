tabuleiro=[]
r=0
e=0
while r!=100:
    r+=1
    tabuleiro.append('\033[1;m0\033[m')

for e,c in enumerate(tabuleiro):
    if ((e+1)/10)-int((e+1)/10)==0:
        print('\n')
    else:
        print(c,end='  ')
