import { basename } from 'path';

export default ({dest, inlineJs = false, inlineCss = false}) => {
  // do something with the options
  dest = `build/http2/${basename(dest)}`;

  // return an array or object as preset, each object represents a build.
  return [{
    dest: dest,
    inlineJs: inlineJs,
    inlineCss: inlineCss,
    plugins: 'split'
  }];
}
