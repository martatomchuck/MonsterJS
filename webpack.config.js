// Konfiguracja webpacka

const path = require("path");

module.exports = {
    entry: './js/app.js', //plik scalający, wejściowy
    output: {
        filename: "js/out.js",
        path: path.resolve(__dirname, ".")
    },
    watch: false, //śledzenie zmian
    mode: 'development',  //development - nieupakowany, production - upakowany, zoptymalizowany
    devtool: "source-map",  //wskazanie linii błędu w trakcie debugowania
    module: { 
        rules: [  //ustawimy dodatkowe reguły:
            {
                test: /\.m?js$/,  //dwa rozszerzenia .js albo .mjs (rzadziej uzywany)
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', //babel js - tłumaczy na klasyczny zapis js; żeby wspierać stare przeglądarki
                    options: {
                        presets: ['@babel/preset-env'] //jeśli używasz babela to użyj takiego presetu
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.css$/, //domyślnie wszystkie pliki scalane to JS, ustawiamy reguły zachowania z plikami innymi niż .js
                use: [
                    { loader: 'style-loader' }, // style-loader wrzuca style już skonwertowane na .js do heada html (zalecane przez Chrome)
                    { loader: 'css-loader' } //loadery: konwersja kodu .css na odpowiednik .js - wczytuje się najpierw
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" }, //loadery: konwersja kodu .scss na .js
                    { loader: "css-loader" },
                    { loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                new require('autoprefixer')()
                            ]
                        }
                    },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    plugins: [
        //mogę sobie doinstalować pluginy

    ]
}