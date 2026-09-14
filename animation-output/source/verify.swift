import Foundation
import AVFoundation
import AppKit
let path=CommandLine.arguments[1]
let asset=AVURLAsset(url:URL(fileURLWithPath:path+"/统一进程动画.mp4"))
let generator=AVAssetImageGenerator(asset:asset)
let image=try generator.copyCGImage(at:CMTime(seconds:29,preferredTimescale:600),actualTime:nil)
let rep=NSBitmapImageRep(cgImage:image)
try rep.representation(using:.png,properties:[:])!.write(to:URL(fileURLWithPath:path+"/视频检查.png"))
print("duration",CMTimeGetSeconds(asset.duration),"size",image.width,image.height)
