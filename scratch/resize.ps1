Add-Type -AssemblyName System.Drawing

function Resize-Image($sourcePath, $targetPath, $maxW) {
    $img = [System.Drawing.Image]::FromFile($sourcePath)
    $ratio = $maxW / $img.Width
    $newH = [int]($img.Height * $ratio)
    $bmp = New-Object System.Drawing.Bitmap($maxW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $maxW, $newH)
    $img.Dispose()
    $g.Dispose()

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]80)
    $bmp.Save($targetPath, $codec, $encoderParams)
    $bmp.Dispose()
    Write-Host "Resized to $targetPath"
}

Resize-Image "scratch/jaipur-leather.jpg" "scratch/jaipur-leather-small.jpg" 800
Resize-Image "scratch/jaipur-clothing.jpg" "scratch/jaipur-clothing-small.jpg" 800
