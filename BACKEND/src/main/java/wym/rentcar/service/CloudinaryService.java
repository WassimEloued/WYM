package wym.rentcar.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CloudinaryService {

    private final Cloudinary cloudinary;

    public record UploadResult(String url, String publicId) {}

    public UploadResult upload(MultipartFile file, String folder) {
        try {
            Map<?, ?> result = cloudinary.uploader().upload(
                    file.getBytes(),
                    ObjectUtils.asMap(
                            "folder", folder,
                            "public_id", UUID.randomUUID().toString(),
                            "resource_type", "image"
                    )
            );
            String url = (String) result.get("secure_url");
            String publicId = (String) result.get("public_id");
            return new UploadResult(url, publicId);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload image to Cloudinary: " + e.getMessage(), e);
        }
    }

    public void delete(String publicId) {
        try {
            cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete image from Cloudinary: " + e.getMessage(), e);
        }
    }
}
