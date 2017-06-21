import { basename, join } from 'path';

export default ({dest, inlineJs = false, inlineCss = false, prefix = 'build/http2'}) => {
  // do something with the options
  dest = join(prefix, basename(dest));

  // return an array or object as preset, each object represents a build.
  return [{
    dest: dest,
    inlineJs: inlineJs,
    inlineCss: inlineCss,
    plugins: 'split'
  }];
}
