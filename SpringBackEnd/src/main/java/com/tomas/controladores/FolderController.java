package com.tomas.controladores;

import com.tomas.entidades.Folder;
import com.tomas.requestBody.FolderRequest;
import com.tomas.servicios.FolderService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/folder")
public class FolderController {

	@Autowired
	FolderService folderService;

	@GetMapping()
	public ArrayList<Folder> getFolder() {
		return folderService.getFolder();
	}

	@PostMapping
	public Folder saveFolder(@RequestBody FolderRequest request) {

		return folderService.saveFolder(request);
	}

	@PostMapping(path = "/{id}")
	public void deleteFolder(@PathVariable("id") Long id) {
		folderService.deleFolder(id);
	}
}
