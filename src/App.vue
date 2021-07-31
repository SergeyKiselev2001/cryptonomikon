<template>
<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
 <!-- <div class="fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center">
    <svg class="animate-spin -ml-1 mr-3 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div> -->
  <div class="container">
    <section>
      <div class="flex">
        <div class="max-w-xs">
          <label for="wallet" class="block text-sm font-medium text-gray-700"
            >Тикер</label
          >
          <div class="mt-1 relative rounded-md shadow-md">
            <input
              v-model="ticker"
              v-on:keydown.enter="if (ticker.trim().length){add();} firstFour=''"
              @input="input"
              type="text"
              name="wallet"
              id="wallet"
              class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              placeholder="Например DOGE"
            />
          </div>
          <div 

          v-if="firstFour.length > 0"  
          
          class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
            <span 
            v-for="item in firstFour"
            :key="item"
            @click="if (ticker.trim().length){add(item);}; firstFour=''"
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              {{item}}
            </span>
        
          </div>
          <div v-if="alreadyexist" class="text-sm text-red-600">Такой тикер уже добавлен</div>
        </div>
      </div>
      <button
        v-on:click="if(ticker.trim().length){add();}"
        type="button"
        class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <!-- Heroicon name: solid/mail -->
        <svg
          class="-ml-0.5 mr-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path
            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          ></path>
        </svg>
        Добавить
      </button>

 <button
        v-on:click="TEST"
        type="button"
        class="mx-1 my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <!-- Heroicon name: solid/mail -->
        <svg
          class="-ml-0.5 mr-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#00ff00"
        >
          <path
            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          ></path>
        </svg>
        Вывод в консоль всех монет
  </button>

    </section>
       <template v-if="tickers.length>0">
<hr class="w-full border-t border-gray-600 my-4" />
  <button
        v-on:click="TEST"
        type="button"
        class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Назад
  </button>

   <button
        v-on:click="filteredList"
        type="button"
        class="mx-1 my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
       Вперед
  </button>

  <div>Фильтрация: {{filter}} <input 
  v-model="filter"
  @input="filteredList"
   type="text"></div>
      <hr class="w-full border-t border-gray-600 my-4" />
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        


        <div
          v-for="i in filteredList()"
          v-bind:key="i.name"
          @click="select(i)"
          :class="{
            'border-4' : sost == i
          }"

          class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
        >
          <div 
          class="px-4 py-5 sm:p-6 text-center">
            <dt class="text-sm font-medium text-gray-500 truncate">
             {{i.name}} - USD
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
                {{i.price}}
            </dd>
          </div>
          <div class="w-full border-t border-gray-200"></div>
          <button
            v-on:click.stop="deletet(i.name)"
            class="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#718096"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path></svg>Удалить
          </button>
        </div>

      </dl>
      <hr class="w-full border-t border-gray-600 my-4" />
      </template>
    <section 
          v-if="sost"
    class="relative">
      <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
        {{sost.name}} - USD
      </h3>
      <div class="flex items-end border-gray-600 border-b border-l h-64">
        <div 
        v-for="(bar, idx) in normalizeGraph()"
        :key="idx"
        :style="{height:`${bar}%`}"

        class="bg-purple-800 border w-10"></div>
      </div>
      <button
        @click="sost=null"
        type="button"
        class="absolute top-0 right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="30"
          height="30"
          x="0"
          y="0"
          viewBox="0 0 511.76 511.76"
          style="enable-background:new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <path
              d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
              fill="#718096"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      </button>
    </section>
  </div>
</div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data(){
    return {
      alreadyexist : false,
      ticker : "",
      tickers : [],
      sost: null,
      graph: [],
      allNameTickers : [],
      firstFour : [],
      interval: 3000,
      page: 1,
      filter: ''  
    }
    
  },


  created(){


   async function fastInfo(i){
      const p = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${buffer[i].name}&tsyms=USD&api_key=5b122270f9ff64c0a513d8fb6f709e265dedf25d4952a685b14870979b3fe42b`);
      const data = await p.json();
      await setTimeout(()=>{}, 1000);
      console.log(data, 'data');
      buffer[i].price = data;
      console.log(this.tickers, 'ETO');
    };
  
    let buffer = localStorage.getItem('cryptonomican') || '[]';
    console.log(buffer);
    buffer = JSON.parse(buffer) || [];
     for (let i of buffer){
      console.log(i.name);
      this.subscribeToReloading(i.name);
    }

    

    for (let i of buffer){
      i.price='...';
    }

    this.tickers = buffer;


    //for (let i in buffer){
      //console.log(i);
     // fastInfo(i);
    //}


    //console.log(buffer);

  },

  async mounted(){
    // Получаем список криптомонет
    let buffer = await (await fetch('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')).json();
    console.log(buffer);
    for (let key in buffer.Data){
     this.allNameTickers.push(key);
    };
  },

  methods : {

    TEST(){

      console.log(this.allNameTickers);

    },

    filteredList(){
      const start = (this.page - 1) * 6;
      const end = this.page * 6 - 1;

      console.log('filteredList', start, end);

      return (this.tickers.filter(i=>i.name.includes(this.filter.toUpperCase()))).slice(start,end);
    },

    add(item){

      this.filter = '';
      let buffer = [];

      for (let i = 0; i < this.tickers.length; i++){
        buffer.push(this.tickers[i].name.toUpperCase());
      }

      this.ticker = item || this.ticker;

      console.log(buffer, '1');
      console.log(this.ticker, '2');
      let alreadyEx = buffer.filter((item)=>item == this.ticker.toUpperCase());
      console.log(alreadyEx, '3');
      if (alreadyEx[0]){this.alreadyexist = true;} else {
        
      this.alreadyexist = false

      let obj = {name: this.ticker.toUpperCase(), price : '-'};
      //console.log(this.ticker);

      this.tickers.push(obj);

      let bufferStorage = this.tickers;
      localStorage.setItem('cryptonomican',JSON.stringify(bufferStorage));

      this.subscribeToReloading(obj.name);

      this.ticker = '';

      console.log(this.tickers);
      };
    },
    deletet(tickerToRm){
      //console.log(tickerToRm);
      
     this.tickers = this.tickers.filter(t => t.name!=tickerToRm);
     localStorage.setItem('cryptonomican',JSON.stringify(this.tickers));
    },

    input(){
        if (this.ticker == ''){

            this.firstFour = [];
        } else {

        

         let buffer = [];
         let toch;

        console.time('1');

         for (let i = 0; i < this.allNameTickers.length; i++){
           if (this.allNameTickers[i] == this.ticker.toUpperCase()){toch = this.allNameTickers[i]};
           if (this.allNameTickers[i].includes(this.ticker.toUpperCase())){
              buffer.push(this.allNameTickers[i]);
           }
         } ;
        
        console.timeEnd('1');
        // одно место под точную копию, плюс одно место для дубликата

        console.time('2');
        buffer = buffer.sort().splice(0,5);
        if (toch){buffer.unshift(toch)};
        let buffer1 = new Set(buffer);


        console.log(buffer1);

        // используем оператор расширения, для преобразования set -> array
        buffer1 = [...buffer1].splice(0,4);

        console.timeEnd('2');
        console.log(buffer1);
        
        this.firstFour = buffer1;

        this.alreadyexist = false;
        }
    },
    subscribeToReloading(name){
      setInterval(async ()=>{ const p = await  fetch(`https://min-api.cryptocompare.com/data/price?fsym=${name}&tsyms=USD&api_key=5b122270f9ff64c0a513d8fb6f709e265dedf25d4952a685b14870979b3fe42b`);
      const data = await p.json();
      this.tickers.find(t => t.name === name).price = data.USD > 1 ? data.USD.toFixed(2): data.USD.toPrecision(2);
      //console.log(data); 

      if (this.sost?.name == name){
        //console.log('da');
        this.graph.push(data.USD);
      }

      }, this.interval);
    },


    normalizeGraph(){
      //console.log(this.graph, 'graph');

      var arr = [];
      for (let key of this.graph){arr.push(key)};

      var maxx = 0.00000002;
      for (var i of arr){
        if (i>maxx){maxx = i};
      }

      var minx = 10000000;
      for (var i of arr){
        if (i<minx){minx = i};
      }

      //console.log(arr, 'ЭТО1');

      //console.log(maxx,'max');
      //console.log(minx,'min');

      for (var i2 in arr){
        //console.log(arr[i2], '[i2]');
        arr[i2] = 5 + (~~((((arr[i2] - minx) * 95))/ (maxx - minx)));
      };

   
      //console.log(arr,'itog');

      return arr;

    },

    select(tickerr){
      //console.log(tickerr);
      this.sost = tickerr;
      this.graph = [];
    }

  }
}
</script>

<style src="@/app.css">

</style>
