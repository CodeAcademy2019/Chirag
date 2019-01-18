#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int comparetor (const void * a, const void * b)
	{
		return ( *(int*)a - *(int*)b );
	}

int *twoArrays(int *a,int *b,int s1,int s2){
    int *res,i,j,count=0;
    res=(int *)malloc(s1*s2*sizeof(int));
    for(i=0;i<s1;i++){
        for(j=0;j<s2;j++){
            res[count++]=a[i]+b[j];
        }
    }
    return res;
}

int main(){
    int t,**p,*length,w,i,j,c,max,profit,*times,**position,totalprofit,*sort,count,k;
    scanf("%d",&t);

    while((t--)!=0){
        
        scanf("%d",&w);
        
        times=(int *)malloc(w*sizeof(int));
        
        p=(int **)malloc(w*sizeof(int *));
        position=(int **)malloc(w*sizeof(int *));
        
        for(i=0;i<w;i++){
        times[i]=0;
        }

        length=(int *)malloc(w*sizeof(int));
        
        for(i=0;i<w;i++){
            scanf("%d",&c);
            length[i]=c;
            p[i]=(int *)malloc(c*sizeof(int));
            position[i]=(int *)malloc(c*sizeof(int));
            for(j=0;j<c;j++){
                scanf("%d",&p[i][j]);
            }
        }
        
        totalprofit=0;
        for(i=0;i<w;i++){
            max=0;
            profit=0;
            for(j=0;j<length[i];j++){
                profit+=10-p[i][j];
                if(profit>max){
                    max=profit;
                    times[i]=0;
                    position[i][times[i]]=j+1;
                    times[i]++;
                    continue;
                }
                if(profit==max){
                    position[i][times[i]]=j+1;
                    times[i]++;
                }
            }
            totalprofit+=max;
        }
        printf("\n%d \n",totalprofit);

        int l=1;
        for(i=0;i<w;i++){
            l*=times[i];
        }

        count=0;k=0;
        sort=position[0];
        for(i=1;i<w;i++){
            sort=twoArrays(sort,position[i],times[i-1]*times[i],times[i]);
        }

        qsort (sort, l, sizeof(int), comparetor);
        printf("%d ",sort[0]);
        count=1;
        for(i=1;i<l;i++){
            if(sort[i]!=sort[i-1]){
            printf("%d ",sort[i]);
            count++;
            }
            if(count==10)
            break;
        }

    }


}