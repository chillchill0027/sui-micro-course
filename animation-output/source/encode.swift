import Foundation
import AVFoundation
import AppKit
let root=CommandLine.arguments[1]
let url=URL(fileURLWithPath: root+"/统一进程动画.mp4")
try? FileManager.default.removeItem(at:url)
let writer=try AVAssetWriter(outputURL:url,fileType:.mp4)
let input=AVAssetWriterInput(mediaType:.video,outputSettings:[AVVideoCodecKey:AVVideoCodecType.h264,AVVideoWidthKey:1920,AVVideoHeightKey:1080,AVVideoCompressionPropertiesKey:[AVVideoAverageBitRateKey:6000000]])
let adaptor=AVAssetWriterInputPixelBufferAdaptor(assetWriterInput:input,sourcePixelBufferAttributes:[kCVPixelBufferPixelFormatTypeKey as String:kCVPixelFormatType_32ARGB,kCVPixelBufferWidthKey as String:1920,kCVPixelBufferHeightKey as String:1080,kCVPixelBufferCGImageCompatibilityKey as String:true,kCVPixelBufferCGBitmapContextCompatibilityKey as String:true])
writer.add(input);writer.startWriting();writer.startSession(atSourceTime:.zero);print("start",writer.status.rawValue,writer.error as Any)
for i in 0...450 {
 while !input.isReadyForMoreMediaData {Thread.sleep(forTimeInterval:0.005)}
 try autoreleasepool {
 let path=root+"/frames/"+String(format:"%04d",i)+".jpg"
 let source=CGImageSourceCreateWithURL(URL(fileURLWithPath:path) as CFURL,nil)!
 let image=CGImageSourceCreateImageAtIndex(source,0,nil)!
 var optional:CVPixelBuffer?;CVPixelBufferCreate(nil,1920,1080,kCVPixelFormatType_32ARGB,[kCVPixelBufferCGImageCompatibilityKey:true,kCVPixelBufferCGBitmapContextCompatibilityKey:true] as CFDictionary,&optional);let pixel=optional!
 CVPixelBufferLockBaseAddress(pixel,[])
 let context=CGContext(data:CVPixelBufferGetBaseAddress(pixel),width:1920,height:1080,bitsPerComponent:8,bytesPerRow:CVPixelBufferGetBytesPerRow(pixel),space:CGColorSpaceCreateDeviceRGB(),bitmapInfo:CGImageAlphaInfo.noneSkipFirst.rawValue)!
 context.draw(image,in:CGRect(x:0,y:0,width:1920,height:1080));CVPixelBufferUnlockBaseAddress(pixel,[])
 if !adaptor.append(pixel,withPresentationTime:CMTime(value:Int64(i),timescale:15)){throw writer.error!}
 }
}
input.markAsFinished();let sem=DispatchSemaphore(value:0);writer.finishWriting{sem.signal()};sem.wait();print(writer.status.rawValue,writer.error as Any)
