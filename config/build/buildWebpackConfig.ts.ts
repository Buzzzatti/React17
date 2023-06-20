import path from "path";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildresolve";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode,paths, isDev} = options;
    return {
        mode: mode,
        // entry: {
        //     RANDOM: path.resolve(__dirname, 'src', 'index.js')
        // }, \\ несколько энтрипоинтов с разными названиями
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',//contenthash - решаешь проблему кешировния
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options): undefined,
    }
}