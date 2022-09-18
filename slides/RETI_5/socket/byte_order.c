#include <arpa/inet.h>
#include <stdio.h>

#define NUM 5

int main() 
{
    unsigned int hton[NUM] = {1000, 12890, 54163, 34012, 62984};
    unsigned int ntoh[NUM] = {5499, 19875, 59821, 43120, 26489};

    for(int i = 0; i < NUM; i++)
        printf("Il numero %x in netwrok order vale: %x\n", hton[i], htons(hton[i]));

    for(int i = 0; i < NUM; i++)
        printf("Il numero %x in host order vale: %x\n", ntoh[i], ntohs(ntoh[i]));
    
    return 0;
}
